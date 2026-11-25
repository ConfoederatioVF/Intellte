---
title: "Colonial South-Central Africa and Mozambique"
subtitle: "Settlement Gazetteer: 922 Individually Assessed Sites (1890AD-1980AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_south_central_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 922 individually assessed settlements across 10 countries spanning eight colonial sub-regions from 1890AD to 1980AD."
hero_label: "fig:hero-settlements-csc"

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

This gazetteer compiles spatial coordinates and multi-period population series for 922 individually assessed settlements across 10 countries in South-Central Africa and Mozambique between 1890AD and 1980AD. Screened from 1.301 candidate colonial towns, mining camps, ports and district stations (379 duplicate alias entries excluded), the retained entries span eight colonial sub-regions across Northern Rhodesia, Southern Rhodesia, Nyasaland, Portuguese Mozambique and adjacent Katanga, Tanzania, Botswana, South Africa, Namibia and eSwatini. Active interpolated entries expand from 467 early centres in 1900AD to 810 in 1920AD, 488 in 1950AD, 87 in 1963AD and 71 in 1980AD, capturing the rise of Maputo agglomeration (718,4k), Harare (656k), Lubumbashi (604k), Lusaka (536k), Bulawayo agglomeration (378k), Ndola (281,3k) and Kitwe (266,3k).



# Background

Colonial urbanisation across South-Central Africa and Mozambique fused mining camp development, railway administration and Indian Ocean port commerce into a distinct regional settlement hierarchy. Whereas coastal centres such as Ilha de Moçambique, Ibo, Sofala, Quelimane, Sena and Tete carried multi-century Portuguese documentary records prior to 1890AD, interior capitals and industrial nodes (Salisbury, Bulawayo, Lusaka, Ndola, Kitwe, Mufulira, Luanshya, Chingola, Lubumbashi and Blantyre) expanded rapidly along newly surveyed railways and mineral belts between 1890AD and 1980AD [@Frederiksen2013SeeingThe; @CASO1960FederationCensus; @Mozambique1940Censo]. Consolidating those series into one harmonised gazetteer clarifies how colonial boundaries, labour reserves and post-colonial independence realigned urban populations [@Mitchell2007IHS; @Moyo2012NamingPractices].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate centres were screened from colonial Southern and Northern Rhodesian censuses (1901AD to 1951AD), Nyasaland protectorate enumerations (1911AD to 1945AD), Federation of Rhodesia and Nyasaland statistics, Mozambique general censuses (1940AD to 1980AD), Belgian Congo annual reports and post-independence national statistical archives [@CASO1960FederationCensus; @Mozambique1940Censo; @Office1949AnnualReport]. Of 1.301 candidate entries inside the 2.023.960 km² study domain bounded over geoBoundaries national polygons [@Runfola2020GeoBoundaries], 379 duplicate alias records were merged or excluded, retaining 922 individually assessed entries across 4.452 observations. Each entry is assigned to one of eight colonial sub-regions (113 inside the core mask perimeter and 9 border-margin towns grouped with their adjacent colonial sub-region).

## Spatial Scope and Benchmark Interpolation

The ledger records 915 city-proper series and 7 metropolitan agglomerations (Maputo, Harare, Lubumbashi, Lusaka, Bulawayo, Blantyre and Lilongwe), preserving explicit separation between municipal boundaries and post-1950AD suburban footprints [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais]. Tables 1 to 8 report linearly interpolated populations at five historical checkpoints (1900AD, 1920AD, 1950AD, 1963AD and 1980AD) alongside each record's exact peak population and peak year, marking periods prior to foundation or outside observed census series with a hyphen (-).

# Testing and Validation

Across all 922 entries, rank-size regression on the upper half ($n = 61$) yields a Zipf exponent of $q = 1,3$ ($R^2 = 0,98$), while full-sample regression gives $q = 1,09$ ($R^2 = 0,96$). Deduplicating paired city-proper and metropolitan coordinates into 111 distinct urban peaks produces the curve shown in Figure \ref{fig:settlements-rank} ($q = 1,12$, $R^2 = 0,97$), confirming close log-linear alignment between regional capitals, Copperbelt mining towns and secondary district stations [@Frederiksen2013SeeingThe; @Mitchell2007IHS].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-south-central-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 111 deduplicated settlements (q = 1,12, R² = 0,97) and mean sub-regional density in 1980AD.</figcaption>
</figure>

# Results

## Northern Rhodesia: Copperbelt and Central

Table \ref{tab:sub-nr-copperbelt} records 42 entries across the Zambian Copperbelt, Lusaka, Broken Hill (Kabwe) and adjacent Katanga border posts, led by Lusaka (536k), Ndola (281,3k), Kitwe (266,3k), Kabwe (136k), Mufulira (135,5k), Chingola (130,9k) and Luanshya (110,9k) [@Frederiksen2013SeeingThe; @Macola2008OneZambia].

<figure class="crd-table-figure" id="tab:sub-nr-copperbelt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lusaka</strong></td><td class="crd-td">ZMB: -15,4, 28,25</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">71k</td><td class="crd-td">171k</td><td class="crd-td">536k</td><td class="crd-td">536k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lusaka (Agglomeration)</strong></td><td class="crd-td">ZMB: -15,4, 28,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">39,3k</td><td class="crd-td">156,2k</td><td class="crd-td">535,8k</td><td class="crd-td">535,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Ndola</strong></td><td class="crd-td">ZMB: -12,99, 28,61</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">38,3k</td><td class="crd-td">109,7k</td><td class="crd-td">281,3k</td><td class="crd-td">281,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kitwe</strong></td><td class="crd-td">ZMB: -12,81, 28,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">63,6k</td><td class="crd-td">131,3k</td><td class="crd-td">266,3k</td><td class="crd-td">266,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kabwe</strong></td><td class="crd-td">ZMB: -14,44, 28,46</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">23,7k</td><td class="crd-td">51,7k</td><td class="crd-td">136k</td><td class="crd-td">136k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mufulira</strong></td><td class="crd-td">ZMB: -12,56, 28,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40k</td><td class="crd-td">83,1k</td><td class="crd-td">135,5k</td><td class="crd-td">135,5k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chingola</strong></td><td class="crd-td">ZMB: -12,56, 27,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,9k</td><td class="crd-td">63,9k</td><td class="crd-td">130,9k</td><td class="crd-td">130,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Luanshya</strong></td><td class="crd-td">ZMB: -13,15, 28,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,7k</td><td class="crd-td">77,5k</td><td class="crd-td">110,9k</td><td class="crd-td">110,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chililabombwe</strong></td><td class="crd-td">ZMB: -12,37, 27,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k</td><td class="crd-td">31,6k</td><td class="crd-td">54,7k</td><td class="crd-td">54,7k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuluma</strong></td><td class="crd-td">ZMB: -12,85, 28,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">19,4k</td><td class="crd-td">52,1k</td><td class="crd-td">52,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kafue</strong></td><td class="crd-td">ZMB: -15,77, 28,18</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5,3k</td><td class="crd-td">10k</td><td class="crd-td">29,8k</td><td class="crd-td">29,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Balamba/Kasumbalela [ZAR]</strong></td><td class="crd-td">COD: -12,22, 27,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,8k</td><td class="crd-td">25,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kapiri Mposhi</strong></td><td class="crd-td">ZMB: -13,95, 28,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">8k</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Namalombwe</strong></td><td class="crd-td">ZMB: -15,39, 28,19</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Balamba</strong></td><td class="crd-td">COD: -12,2, 27,8</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Roan</strong></td><td class="crd-td">ZMB: -13,1, 28,33</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Sakania</strong></td><td class="crd-td">COD: -12,75, 28,56</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Madido</strong></td><td class="crd-td">ZMB: -15,35, 28,37</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chisankane</strong></td><td class="crd-td">ZMB: -15,48, 28,35</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Palabana</strong></td><td class="crd-td">ZMB: -15,45, 28,53</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Munda</strong></td><td class="crd-td">ZMB: -13,95, 29,4</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Bwana Mkubwa</strong></td><td class="crd-td">ZMB: -13,03, 28,7</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mapalo</strong></td><td class="crd-td">ZMB: -12,94, 28,67</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mpongwe</strong></td><td class="crd-td">ZMB: -13,51, 28,2</td><td class="crd-td">923</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Lusaka West</strong></td><td class="crd-td">ZMB: -15,32, 28,11</td><td class="crd-td">897</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chibombo</strong></td><td class="crd-td">ZMB: -14,69, 28,1</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chilongolo</strong></td><td class="crd-td">ZMB: -15,49, 28,16</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mokambo</strong></td><td class="crd-td">COD: -12,43, 28,35</td><td class="crd-td">-</td><td class="crd-td">920</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Butondo</strong></td><td class="crd-td">ZMB: -12,52, 28,2</td><td class="crd-td">708</td><td class="crd-td">849</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chisamba</strong></td><td class="crd-td">ZMB: -14,98, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Chinkuli</strong></td><td class="crd-td">ZMB: -15,3, 28,42</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chirundu</strong></td><td class="crd-td">ZMB: -16,03, 28,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Tshinsenda</strong></td><td class="crd-td">COD: -12,31, 27,97</td><td class="crd-td">-</td><td class="crd-td">686</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ibenga</strong></td><td class="crd-td">ZMB: -13,35, 28,41</td><td class="crd-td">606</td><td class="crd-td">753</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mulundu</strong></td><td class="crd-td">ZMB: -12,49, 28,32</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Serenje</strong></td><td class="crd-td">ZMB: -13,23, 30,23</td><td class="crd-td">-</td><td class="crd-td">690</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mkushi</strong></td><td class="crd-td">ZMB: -13,62, 29,41</td><td class="crd-td">-</td><td class="crd-td">697</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Milenge</strong></td><td class="crd-td">ZMB: -12,41, 29,5</td><td class="crd-td">-</td><td class="crd-td">888</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chalimbana</strong></td><td class="crd-td">ZMB: -15,39, 28,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Nampundwe</strong></td><td class="crd-td">ZMB: -15,51, 27,92</td><td class="crd-td">448</td><td class="crd-td">576</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chongwe</strong></td><td class="crd-td">ZMB: -15,33, 28,67</td><td class="crd-td">882</td><td class="crd-td">766</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chunga</strong></td><td class="crd-td">ZMB: -15,32, 28,27</td><td class="crd-td">344</td><td class="crd-td">409</td><td class="crd-td">971</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1951AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Northern Rhodesia: Copperbelt and Central (1900AD to 1980AD).</figcaption>
</figure>

## Northern Rhodesia: Barotseland and Southern

Table \ref{tab:sub-nr-barotse} details 70 settlements across Barotseland, Southern and North-Western Provinces and the adjacent Katanga-Caprivi frontier, anchored by Lubumbashi (604k city-proper; 435,4k agglomeration), Livingstone (63,3k), Kipushi (46,4k), Mazabuka (29,6k) and Mongu (24,9k) [@Office1949AnnualReport; @CASO1960FederationCensus].

<figure class="crd-table-figure" id="tab:sub-nr-barotse">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lubumbashi</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">16,1k</td><td class="crd-td">103k</td><td class="crd-td">224,2k</td><td class="crd-td">604k</td><td class="crd-td">604k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi (Agglomeration)</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">101,8k</td><td class="crd-td">207,9k</td><td class="crd-td">435,4k</td><td class="crd-td">435,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Livingstone</strong></td><td class="crd-td">ZMB: -17,84, 25,85</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">24,6k</td><td class="crd-td">38k</td><td class="crd-td">63,3k</td><td class="crd-td">63,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi</strong></td><td class="crd-td">COD: -11,76, 27,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,3k</td><td class="crd-td">24,9k</td><td class="crd-td">46,4k</td><td class="crd-td">46,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mazabuka</strong></td><td class="crd-td">ZMB: -15,86, 27,74</td><td class="crd-td">-</td><td class="crd-td">935</td><td class="crd-td">3,4k</td><td class="crd-td">14,3k</td><td class="crd-td">29,6k</td><td class="crd-td">29,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mongu</strong></td><td class="crd-td">ZMB: -15,27, 23,15</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,3k</td><td class="crd-td">7,9k</td><td class="crd-td">24,9k</td><td class="crd-td">24,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Choma</strong></td><td class="crd-td">ZMB: -16,8, 26,98</td><td class="crd-td">-</td><td class="crd-td">780</td><td class="crd-td">2,8k</td><td class="crd-td">8,9k</td><td class="crd-td">17,9k</td><td class="crd-td">17,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Solwezi</strong></td><td class="crd-td">ZMB: -12,17, 26,39</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">7,5k</td><td class="crd-td">15k</td><td class="crd-td">15k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Monze</strong></td><td class="crd-td">ZMB: -16,29, 27,47</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">4,3k</td><td class="crd-td">8,1k</td><td class="crd-td">13,1k</td><td class="crd-td">13,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lealui</strong></td><td class="crd-td">ZMB: -15,23, 23,03</td><td class="crd-td">6,5k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1905AD)</td></tr>
<tr><td class="crd-td"><strong>Macondo</strong></td><td class="crd-td">AGO: -12,58, 23,76</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Libonda</strong></td><td class="crd-td">ZMB: -14,89, 22,98</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Mwandi</strong></td><td class="crd-td">ZMB: -17,51, 24,8</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Limulunga</strong></td><td class="crd-td">ZMB: -15,16, 23,15</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mbalala</strong></td><td class="crd-td">ZMB: -16,56, 26,97</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Nalolo</strong></td><td class="crd-td">ZMB: -15,55, 23,13</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Djori</strong></td><td class="crd-td">COD: -10,75, 25,41</td><td class="crd-td">975</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Sefula</strong></td><td class="crd-td">ZMB: -15,4, 23,17</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Lukuni</strong></td><td class="crd-td">COD: -11,52, 27,46</td><td class="crd-td">792</td><td class="crd-td">948</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Chikuni</strong></td><td class="crd-td">ZMB: -16,45, 27,54</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Manyinga</strong></td><td class="crd-td">ZMB: -13,42, 24,33</td><td class="crd-td">834</td><td class="crd-td">1,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Rivungo</strong></td><td class="crd-td">AGO: -16,33, 22,04</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbwe</strong></td><td class="crd-td">COD: -11,47, 27,39</td><td class="crd-td">904</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba Zambia</strong></td><td class="crd-td">ZMB: -16,53, 27,36</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Victoria Falls</strong></td><td class="crd-td">ZWE: -17,93, 25,83</td><td class="crd-td">-</td><td class="crd-td">766</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Macha</strong></td><td class="crd-td">ZMB: -16,4, 26,79</td><td class="crd-td">-</td><td class="crd-td">932</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Sinazongwe</strong></td><td class="crd-td">ZMB: -17,26, 27,46</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Rusangu</strong></td><td class="crd-td">ZMB: -16,34, 27,5</td><td class="crd-td">-</td><td class="crd-td">951</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Lumbala Caquengue</strong></td><td class="crd-td">AGO: -12,64, 22,59</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Kalomo</strong></td><td class="crd-td">ZMB: -17,02, 26,49</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kisenda</strong></td><td class="crd-td">COD: -10,78, 25,71</td><td class="crd-td">737</td><td class="crd-td">974</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Zambezi</strong></td><td class="crd-td">ZMB: -13,55, 23,11</td><td class="crd-td">-</td><td class="crd-td">829</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Itezhi-Tezhi</strong></td><td class="crd-td">ZMB: -15,74, 26,04</td><td class="crd-td">529</td><td class="crd-td">821</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mumbwa</strong></td><td class="crd-td">ZMB: -14,97, 27,07</td><td class="crd-td">-</td><td class="crd-td">879</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Lukona</strong></td><td class="crd-td">ZMB: -15,34, 22,93</td><td class="crd-td">-</td><td class="crd-td">867</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kazungula</strong></td><td class="crd-td">BWA: -17,8, 25,24</td><td class="crd-td">-</td><td class="crd-td">844</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Zimba</strong></td><td class="crd-td">ZMB: -17,32, 26,2</td><td class="crd-td">-</td><td class="crd-td">822</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mulobezi</strong></td><td class="crd-td">ZMB: -16,79, 25,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kasenga</strong></td><td class="crd-td">ZMB: -15,69, 26,77</td><td class="crd-td">-</td><td class="crd-td">807</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 30 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Northern Rhodesia: Barotseland and Southern (1900AD to 1980AD) (top 40 of 70 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Northern Rhodesia: Northern, Luapula and East

Table \ref{tab:sub-nr-northeast} lists 95 settlements across Northern, Luapula and Eastern Provinces and the Luapula-Mweru border, led by Kasama (38,1k), Mansa (34,8k), Chipata (32,3k) and Mpika (14,4k) [@Hellen1962SomeAspects; @NorthernRhodesia1938Report].

<figure class="crd-table-figure" id="tab:sub-nr-northeast">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kasama</strong></td><td class="crd-td">ZMB: -10,22, 31,2</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,6k</td><td class="crd-td">18k</td><td class="crd-td">38,1k</td><td class="crd-td">38,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mansa</strong></td><td class="crd-td">ZMB: -11,21, 28,89</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">15,9k</td><td class="crd-td">34,8k</td><td class="crd-td">34,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chipata</strong></td><td class="crd-td">ZMB: -13,63, 32,63</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">5,7k</td><td class="crd-td">11,3k</td><td class="crd-td">32,3k</td><td class="crd-td">32,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mpika</strong></td><td class="crd-td">ZMB: -11,84, 31,41</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">4,2k</td><td class="crd-td">8,6k</td><td class="crd-td">14,4k</td><td class="crd-td">14,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nakonde/Tunduma [ZMB]</strong></td><td class="crd-td">ZMB: -9,32, 32,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">12,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Pweto</strong></td><td class="crd-td">COD: -8,46, 28,91</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">7,5k</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Samfya</strong></td><td class="crd-td">ZMB: -11,36, 29,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mbala</strong></td><td class="crd-td">ZMB: -8,86, 31,35</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k</td><td class="crd-td">6,2k</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kasenga 1</strong></td><td class="crd-td">COD: -10,39, 28,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lukwese</strong></td><td class="crd-td">ZMB: -10,2, 28,64</td><td class="crd-td">2,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mwatishi/Kabuta</strong></td><td class="crd-td">ZMB: -9,18, 28,85</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Chitimukulu</strong></td><td class="crd-td">ZMB: -10,02, 31,62</td><td class="crd-td">4,4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mutabi</strong></td><td class="crd-td">COD: -8,59, 28,52</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Lunde</strong></td><td class="crd-td">ZMB: -9,86, 28,76</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Kapoya/Kasembe</strong></td><td class="crd-td">ZMB: -8,54, 29,03</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Moliro</strong></td><td class="crd-td">COD: -8,22, 30,57</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chilanga</strong></td><td class="crd-td">ZMB: -9,38, 32,55</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kasenga</strong></td><td class="crd-td">COD: -10,37, 28,61</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chiwezi</strong></td><td class="crd-td">TZA: -9,26, 32,84</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kiondo</strong></td><td class="crd-td">COD: -8,78, 28,63</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyembo</strong></td><td class="crd-td">ZMB: -9,66, 28,8</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Makasa</strong></td><td class="crd-td">ZMB: -9,68, 31,84</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Mwasabobmbwe</strong></td><td class="crd-td">ZMB: -9,8, 28,75</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chilubula</strong></td><td class="crd-td">ZMB: -10,17, 30,95</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mununga</strong></td><td class="crd-td">ZMB: -9,03, 29,05</td><td class="crd-td">695</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Nkula</strong></td><td class="crd-td">ZMB: -10,48, 32,03</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Kantete</strong></td><td class="crd-td">ZMB: -8,69, 29,15</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chikwanda</strong></td><td class="crd-td">ZMB: -11,79, 31,5</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Mwense 1</strong></td><td class="crd-td">ZMB: -10,37, 28,69</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mbereshi</strong></td><td class="crd-td">ZMB: -9,74, 28,78</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Chiparamba/Msanga</strong></td><td class="crd-td">ZMB: -13,59, 32,46</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Nakonde</strong></td><td class="crd-td">ZMB: -9,34, 32,74</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Matai</strong></td><td class="crd-td">TZA: -8,3, 31,52</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shimwalule</strong></td><td class="crd-td">ZMB: -10,23, 31,78</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1921AD)</td></tr>
<tr><td class="crd-td"><strong>Mambilima</strong></td><td class="crd-td">ZMB: -10,52, 28,68</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kilomba</strong></td><td class="crd-td">COD: -9,42, 28,37</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Nchelenge</strong></td><td class="crd-td">ZMB: -9,36, 28,74</td><td class="crd-td">-</td><td class="crd-td">867</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kayambi</strong></td><td class="crd-td">ZMB: -9,46, 31,99</td><td class="crd-td">797</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Kawambwa</strong></td><td class="crd-td">ZMB: -9,78, 29,09</td><td class="crd-td">-</td><td class="crd-td">851</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 55 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Northern Rhodesia: Northern, Luapula and East (1900AD to 1980AD) (top 40 of 95 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Southern Rhodesia: Mashonaland and Manicaland

Table \ref{tab:sub-sr-mashona} presents 86 settlements across Mashonaland and Manicaland, led by Harare (656k city-proper; 596,5k agglomeration), Mutare (64,2k), Kadoma (40,6k) and Chinhoyi (22,1k) [@ThomasJBryan2026BritishSouthern; @Mudeka2016GenderedExclusion; @Chingozha2019TheComplementarity].

<figure class="crd-table-figure" id="tab:sub-sr-mashona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">5k</td><td class="crd-td">15,7k</td><td class="crd-td">119k</td><td class="crd-td">274k</td><td class="crd-td">656k</td><td class="crd-td">656k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Harare (Agglomeration)</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">187,7k</td><td class="crd-td">377,9k</td><td class="crd-td">596,5k</td><td class="crd-td">596,5k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mutare</strong></td><td class="crd-td">ZWE: -18,98, 32,62</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">32,4k</td><td class="crd-td">44,8k</td><td class="crd-td">64,2k</td><td class="crd-td">64,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kadoma</strong></td><td class="crd-td">ZWE: -18,35, 29,89</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">9,3k</td><td class="crd-td">26,9k</td><td class="crd-td">40,6k</td><td class="crd-td">40,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Epworth</strong></td><td class="crd-td">ZWE: -17,89, 31,15</td><td class="crd-td">7,9k</td><td class="crd-td">10,6k</td><td class="crd-td">24,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chinhoyi</strong></td><td class="crd-td">ZWE: -17,38, 30,2</td><td class="crd-td">-</td><td class="crd-td">904</td><td class="crd-td">3,2k</td><td class="crd-td">14,2k</td><td class="crd-td">22,1k</td><td class="crd-td">22,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Marondera</strong></td><td class="crd-td">ZWE: -18,2, 31,53</td><td class="crd-td">-</td><td class="crd-td">998</td><td class="crd-td">3,4k</td><td class="crd-td">11,9k</td><td class="crd-td">18,3k</td><td class="crd-td">18,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chegutu</strong></td><td class="crd-td">ZWE: -18,14, 30,15</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">8,9k</td><td class="crd-td">16,4k</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Bindura</strong></td><td class="crd-td">ZWE: -17,3, 31,33</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,8k</td><td class="crd-td">8,3k</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Dangamvura</strong></td><td class="crd-td">ZWE: -19,06, 32,57</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Murape</strong></td><td class="crd-td">ZWE: -17,56, 31,22</td><td class="crd-td">709</td><td class="crd-td">4k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Eiffel Flats</strong></td><td class="crd-td">ZWE: -18,29, 29,99</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Nyahode</strong></td><td class="crd-td">ZWE: -20,05, 32,85</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Ruwa</strong></td><td class="crd-td">ZWE: -17,89, 31,24</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Machipanda</strong></td><td class="crd-td">MOZ: -18,98, 32,73</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sangano</strong></td><td class="crd-td">ZWE: -18,42, 32,16</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bangwe Maunganidze</strong></td><td class="crd-td">ZWE: -19,98, 32,36</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chinamhora</strong></td><td class="crd-td">ZWE: -17,61, 31,27</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Marange</strong></td><td class="crd-td">ZWE: -19,45, 32,19</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Mazowe</strong></td><td class="crd-td">ZWE: -17,5, 30,97</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Seke</strong></td><td class="crd-td">ZWE: -18,05, 31,16</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Penhalonga</strong></td><td class="crd-td">ZWE: -18,89, 32,7</td><td class="crd-td">1,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Nembudziya I</strong></td><td class="crd-td">ZWE: -17,72, 29</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Zvimba</strong></td><td class="crd-td">ZWE: -17,7, 30,36</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Mangwende</strong></td><td class="crd-td">ZWE: -17,65, 31,69</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Chishakwe</strong></td><td class="crd-td">ZWE: -19,15, 32,64</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Chihota</strong></td><td class="crd-td">ZWE: -18,28, 31,26</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Penalonga Urban</strong></td><td class="crd-td">ZWE: -18,88, 32,65</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chakari</strong></td><td class="crd-td">ZWE: -18,06, 29,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mukumbura</strong></td><td class="crd-td">ZWE: -16,21, 31,68</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Norton west</strong></td><td class="crd-td">ZWE: -17,89, 30,66</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Murehwa Centre</strong></td><td class="crd-td">ZWE: -17,66, 31,83</td><td class="crd-td">914</td><td class="crd-td">1,3k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Shamva</strong></td><td class="crd-td">ZWE: -17,3, 31,57</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Rusape</strong></td><td class="crd-td">ZWE: -18,54, 32,14</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Bingaguru</strong></td><td class="crd-td">ZWE: -18,72, 32,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Mutorashanga</strong></td><td class="crd-td">ZWE: -17,15, 30,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mount Hampden</strong></td><td class="crd-td">ZWE: -17,73, 30,94</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Norton</strong></td><td class="crd-td">ZWE: -17,88, 30,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Banket</strong></td><td class="crd-td">ZWE: -17,38, 30,4</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Chisina 3</strong></td><td class="crd-td">ZWE: -18,44, 29,37</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 46 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Southern Rhodesia: Mashonaland and Manicaland (1900AD to 1980AD) (top 40 of 86 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Southern Rhodesia: Matabeleland and Midlands

Table \ref{tab:sub-sr-matabele} catalogues 83 sites across Matabeleland, Midlands, Masvingo and the Tati-Limpopo border, anchored by Bulawayo (378k agglomeration; 92,2k colonial city-proper), Kwekwe (41,4k), Hwange (35,2k), Gweru (31,2k) and Francistown (29,4k) [@CASO1960FederationCensus; @NMMZ2022ZimbabweSites].

<figure class="crd-table-figure" id="tab:sub-sr-matabele">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bulawayo (Agglomeration)</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">115,5k</td><td class="crd-td">269,8k</td><td class="crd-td">378k</td><td class="crd-td">378k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Bulawayo</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">14,1k</td><td class="crd-td">17,8k</td><td class="crd-td">84,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">92,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kwekwe</strong></td><td class="crd-td">ZWE: -18,93, 29,81</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">14,2k</td><td class="crd-td">24,1k</td><td class="crd-td">41,4k</td><td class="crd-td">41,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Hwange</strong></td><td class="crd-td">ZWE: -18,36, 26,5</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">15k</td><td class="crd-td">22,5k</td><td class="crd-td">35,2k</td><td class="crd-td">35,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Gweru</strong></td><td class="crd-td">ZWE: -19,46, 29,75</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">15,3k</td><td class="crd-td">17,6k</td><td class="crd-td">31,2k</td><td class="crd-td">31,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Francistown</strong></td><td class="crd-td">BWA: -21,17, 27,52</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">6,1k</td><td class="crd-td">13k</td><td class="crd-td">29,4k</td><td class="crd-td">29,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Masvingo South</strong></td><td class="crd-td">ZWE: -20,09, 30,8</td><td class="crd-td">4k</td><td class="crd-td">5,2k</td><td class="crd-td">10,3k</td><td class="crd-td">13,1k</td><td class="crd-td">26,1k</td><td class="crd-td">26,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Platinum Mine</strong></td><td class="crd-td">ZWE: -20,3, 30,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">16,8k</td><td class="crd-td">24,6k</td><td class="crd-td">24,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Selebi-Phikwe</strong></td><td class="crd-td">BWA: -21,98, 27,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,2k</td><td class="crd-td">24,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Redcliff</strong></td><td class="crd-td">ZWE: -19,01, 29,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">8,1k</td><td class="crd-td">13,3k</td><td class="crd-td">13,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nancefield</strong></td><td class="crd-td">ZAF: -22,34, 30,01</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">8,6k</td><td class="crd-td">10,7k</td><td class="crd-td">-</td><td class="crd-td">11,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Zvishavane</strong></td><td class="crd-td">ZWE: -20,33, 30,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Musina</strong></td><td class="crd-td">ZAF: -22,35, 30,04</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Lal Bagh</strong></td><td class="crd-td">ZWE: -19,45, 29,84</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Mashava Mine</strong></td><td class="crd-td">ZWE: -20,04, 30,48</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Masvingo</strong></td><td class="crd-td">ZWE: -20,06, 30,83</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Buhera</strong></td><td class="crd-td">ZWE: -19,33, 31,43</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Chidzurira</strong></td><td class="crd-td">ZWE: -20,4, 31,44</td><td class="crd-td">2,6k</td><td class="crd-td">2k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Musikavanhu</strong></td><td class="crd-td">ZWE: -20,54, 32,42</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Shurugwi</strong></td><td class="crd-td">ZWE: -19,67, 29,98</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Zimuto</strong></td><td class="crd-td">ZWE: -19,84, 30,89</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Chisumbanje</strong></td><td class="crd-td">ZWE: -20,84, 32,2</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Emganwini</strong></td><td class="crd-td">ZWE: -20,21, 28,49</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Tonota</strong></td><td class="crd-td">BWA: -21,42, 27,45</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Njelele Matopos</strong></td><td class="crd-td">ZWE: -20,59, 28,57</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Filabusi</strong></td><td class="crd-td">ZWE: -20,53, 29,28</td><td class="crd-td">830</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Thengwe</strong></td><td class="crd-td">ZAF: -22,73, 30,54</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Gwanda</strong></td><td class="crd-td">ZWE: -20,94, 29,02</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Dula Matopos</strong></td><td class="crd-td">ZWE: -20,52, 28,74</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Mmadinare</strong></td><td class="crd-td">BWA: -21,88, 27,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Gumira</strong></td><td class="crd-td">ZWE: -20,51, 32,39</td><td class="crd-td">736</td><td class="crd-td">1,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Inyati</strong></td><td class="crd-td">ZWE: -19,68, 28,85</td><td class="crd-td">1,6k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mberengwa</strong></td><td class="crd-td">ZWE: -20,48, 29,91</td><td class="crd-td">630</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>West Nicholson</strong></td><td class="crd-td">ZWE: -21,07, 29,37</td><td class="crd-td">747</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Ka-Mhinga</strong></td><td class="crd-td">ZAF: -22,76, 30,9</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Bobonong</strong></td><td class="crd-td">BWA: -21,97, 28,42</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Mbuyanehanda</strong></td><td class="crd-td">ZWE: -20,77, 32,23</td><td class="crd-td">896</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Esigodini</strong></td><td class="crd-td">ZWE: -20,29, 28,92</td><td class="crd-td">803</td><td class="crd-td">992</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Tutume</strong></td><td class="crd-td">BWA: -20,51, 27,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 43 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in Southern Rhodesia: Matabeleland and Midlands (1900AD to 1980AD) (top 40 of 83 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Nyasaland Protectorate

Table \ref{tab:sub-nyasaland} documents 254 settlements across Malawi and the northern Lake Malawi Tanzanian rim, led by Blantyre (248k agglomeration; 222,2k city-proper), Lilongwe (127,9k agglomeration; 102,9k city-proper), Zomba (28,8k) and Mzuzu (21,8k) [@Sawasawa2014LabourExploitation; @Nyasaland1943AgricultureReport; @Moyo2012NamingPractices].

<figure class="crd-table-figure" id="tab:sub-nyasaland">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blantyre (Agglomeration)</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,5k</td><td class="crd-td">95,7k</td><td class="crd-td">248k</td><td class="crd-td">248k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">2,6k</td><td class="crd-td">6k</td><td class="crd-td">17,6k</td><td class="crd-td">112,4k</td><td class="crd-td">-</td><td class="crd-td">222,2k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Lilongwe (Agglomeration)</strong></td><td class="crd-td">MWI: -13,98, 33,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,2k</td><td class="crd-td">127,9k</td><td class="crd-td">127,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lilongwe</strong></td><td class="crd-td">MWI: -13,98, 33,77</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">8,1k</td><td class="crd-td">52,1k</td><td class="crd-td">-</td><td class="crd-td">102,9k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Lilongwe West</strong></td><td class="crd-td">MWI: -14,01, 33,72</td><td class="crd-td">14,8k</td><td class="crd-td">21,4k</td><td class="crd-td">40,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45,2k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Zomba</strong></td><td class="crd-td">MWI: -15,34, 35,4</td><td class="crd-td">1,9k</td><td class="crd-td">3,5k</td><td class="crd-td">7,2k</td><td class="crd-td">15,5k</td><td class="crd-td">28,8k</td><td class="crd-td">28,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de gurué</strong></td><td class="crd-td">MOZ: -15,48, 36,99</td><td class="crd-td">8,4k</td><td class="crd-td">11,6k</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mzuzu</strong></td><td class="crd-td">MWI: -11,44, 33,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">8,1k</td><td class="crd-td">21,8k</td><td class="crd-td">21,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kyungu TA west</strong></td><td class="crd-td">MWI: -9,88, 33,86</td><td class="crd-td">8,1k</td><td class="crd-td">4,8k</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,9k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Vila Pereira de Eça</strong></td><td class="crd-td">MWI: -16,33, 35,2</td><td class="crd-td">5,8k</td><td class="crd-td">8,7k</td><td class="crd-td">16k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,3k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Karonga</strong></td><td class="crd-td">MWI: -9,98, 33,92</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k</td><td class="crd-td">7,9k</td><td class="crd-td">14k</td><td class="crd-td">14k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Namadzi</strong></td><td class="crd-td">MWI: -15,6, 35,16</td><td class="crd-td">6,3k</td><td class="crd-td">8k</td><td class="crd-td">13k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,9k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Chigukumile</strong></td><td class="crd-td">MWI: -15,56, 35,55</td><td class="crd-td">4,7k</td><td class="crd-td">5,8k</td><td class="crd-td">11,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,3k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhulambe</strong></td><td class="crd-td">MWI: -15,82, 35,76</td><td class="crd-td">5,3k</td><td class="crd-td">7,2k</td><td class="crd-td">10,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mutuali</strong></td><td class="crd-td">MOZ: -14,83, 37,03</td><td class="crd-td">4,1k</td><td class="crd-td">6k</td><td class="crd-td">11,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Limbe</strong></td><td class="crd-td">MWI: -15,82, 35,05</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhotakota</strong></td><td class="crd-td">MWI: -12,92, 34,28</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">6,2k</td><td class="crd-td">8,2k</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mphuka north</strong></td><td class="crd-td">MWI: -16,05, 35,05</td><td class="crd-td">4,2k</td><td class="crd-td">5,1k</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Mutuáli</strong></td><td class="crd-td">MOZ: -14,87, 37</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Senga</strong></td><td class="crd-td">MWI: -13,75, 34,6</td><td class="crd-td">3,2k</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Muona</strong></td><td class="crd-td">MWI: -16,42, 35,18</td><td class="crd-td">2,8k</td><td class="crd-td">3,6k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Makwasa</strong></td><td class="crd-td">MWI: -16,19, 35,09</td><td class="crd-td">2,9k</td><td class="crd-td">4,3k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Kilupula TA west</strong></td><td class="crd-td">MWI: -9,74, 33,87</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>South of Mount Mulanje</strong></td><td class="crd-td">MWI: -16,03, 35,6</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Mbinga</strong></td><td class="crd-td">TZA: -10,93, 35,02</td><td class="crd-td">-</td><td class="crd-td">989</td><td class="crd-td">2k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Tukuyu</strong></td><td class="crd-td">TZA: -9,25, 33,65</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Bangula</strong></td><td class="crd-td">MWI: -16,6, 35,13</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Gurué</strong></td><td class="crd-td">MOZ: -15,47, 36,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ntambanyama</strong></td><td class="crd-td">MWI: -16,08, 35,02</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Thondwe</strong></td><td class="crd-td">MWI: -15,5, 35,51</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Kunthembwe</strong></td><td class="crd-td">MWI: -15,68, 34,93</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Nsanje</strong></td><td class="crd-td">MWI: -16,9, 35,26</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Mbinga Mjini</strong></td><td class="crd-td">TZA: -10,95, 35</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Khonjeni</strong></td><td class="crd-td">MWI: -16,11, 35,25</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Chia</strong></td><td class="crd-td">MWI: -13,09, 34,31</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Ntaja</strong></td><td class="crd-td">MWI: -14,93, 35,53</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Namnja</strong></td><td class="crd-td">MWI: -14,96, 35,69</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Qawāsim</strong></td><td class="crd-td">MWI: -16,04, 35,23</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Dedza</strong></td><td class="crd-td">MWI: -14,39, 34,33</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Kamwendo</strong></td><td class="crd-td">MWI: -13,84, 33,05</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 214 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Nyasaland Protectorate (1900AD to 1980AD) (top 40 of 254 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Portuguese Mozambique: North and Zambezia

Table \ref{tab:sub-moz-north} compiles 153 centres across Niassa, Cabo Delgado, Nampula, Zambézia, Tete and the lower Ruvuma margin, headed by Nampula (145,6k), Nacala Porto (74,9k), Quelimane (58,8k), Mtwara (48,5k), Tete (44,9k) and Pemba (41,1k) [@Mozambique1940Censo; @Machaqueiro2013EnsinoPolitica; @Pereira2016CuttingBack].

<figure class="crd-table-figure" id="tab:sub-moz-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nampula</strong></td><td class="crd-td">MOZ: -15,13, 39,26</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">15,4k</td><td class="crd-td">20,4k</td><td class="crd-td">145,6k</td><td class="crd-td">145,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nacala Porto</strong></td><td class="crd-td">MOZ: -14,59, 40,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">35,2k</td><td class="crd-td">74,9k</td><td class="crd-td">74,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Quelimane</strong></td><td class="crd-td">MOZ: -17,83, 36,92</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k</td><td class="crd-td">15,3k</td><td class="crd-td">12,2k</td><td class="crd-td">58,8k</td><td class="crd-td">58,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwara</strong></td><td class="crd-td">TZA: -10,3, 40,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">18k</td><td class="crd-td">26,5k</td><td class="crd-td">48,5k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Tete</strong></td><td class="crd-td">MOZ: -16,14, 33,62</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">22,9k</td><td class="crd-td">44,9k</td><td class="crd-td">44,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba</strong></td><td class="crd-td">MOZ: -13,01, 40,55</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">8,4k</td><td class="crd-td">24k</td><td class="crd-td">41,1k</td><td class="crd-td">41,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lichinga</strong></td><td class="crd-td">MOZ: -13,3, 35,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">19,4k</td><td class="crd-td">38,8k</td><td class="crd-td">38,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Nacala A Velha</strong></td><td class="crd-td">MOZ: -14,55, 40,62</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">6,2k</td><td class="crd-td">11,8k</td><td class="crd-td">19,2k</td><td class="crd-td">19,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Newala</strong></td><td class="crd-td">TZA: -10,93, 39,3</td><td class="crd-td">677</td><td class="crd-td">1,1k</td><td class="crd-td">3,2k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">18,4k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Netia</strong></td><td class="crd-td">MOZ: -14,75, 39,98</td><td class="crd-td">5,2k</td><td class="crd-td">6,4k</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">6,4k</td><td class="crd-td">7,4k</td><td class="crd-td">12,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Caroa</strong></td><td class="crd-td">MOZ: -14,38, 39,91</td><td class="crd-td">3,1k</td><td class="crd-td">5,3k</td><td class="crd-td">11,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Angoche</strong></td><td class="crd-td">MOZ: -16,21, 39,92</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Namuana</strong></td><td class="crd-td">MOZ: -14,89, 39,63</td><td class="crd-td">3,3k</td><td class="crd-td">4,5k</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Macomia</strong></td><td class="crd-td">MOZ: -12,23, 40,14</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Tandahimba</strong></td><td class="crd-td">TZA: -10,77, 39,63</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mocuba</strong></td><td class="crd-td">MOZ: -16,82, 37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Moatize</strong></td><td class="crd-td">MOZ: -16,12, 33,73</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Alto Molocue</strong></td><td class="crd-td">MOZ: -15,61, 37,68</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Montepuez</strong></td><td class="crd-td">MOZ: -13,12, 39</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mazeze</strong></td><td class="crd-td">MOZ: -15,96, 39,51</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mepera</strong></td><td class="crd-td">MOZ: -14,92, 40,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mocimboa da Praia</strong></td><td class="crd-td">MOZ: -11,36, 40,35</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sancul</strong></td><td class="crd-td">MOZ: -15,07, 40,67</td><td class="crd-td">3,8k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Alto Molócuè</strong></td><td class="crd-td">MOZ: -15,64, 37,69</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Namialo</strong></td><td class="crd-td">MOZ: -14,92, 39,99</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Cabaceira Grande</strong></td><td class="crd-td">MOZ: -14,99, 40,74</td><td class="crd-td">3,3k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Chiure</strong></td><td class="crd-td">MOZ: -13,37, 39,78</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mikindani</strong></td><td class="crd-td">TZA: -10,28, 40,12</td><td class="crd-td">3,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sangage</strong></td><td class="crd-td">MOZ: -16,01, 40,09</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Mogincual</strong></td><td class="crd-td">MOZ: -15,57, 40,45</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Maganja da Costa</strong></td><td class="crd-td">MOZ: -17,31, 37,51</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ribáuè</strong></td><td class="crd-td">MOZ: -14,94, 38,32</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Tambara</strong></td><td class="crd-td">MOZ: -16,72, 34,24</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Pebane</strong></td><td class="crd-td">MOZ: -17,26, 38,13</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mueda</strong></td><td class="crd-td">MOZ: -11,66, 39,55</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Boroma</strong></td><td class="crd-td">MOZ: -16,06, 33,45</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Tubruto</strong></td><td class="crd-td">MOZ: -14,04, 39,6</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Maneia</strong></td><td class="crd-td">MOZ: -15,61, 39,94</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ibo</strong></td><td class="crd-td">MOZ: -12,34, 40,59</td><td class="crd-td">3,9k</td><td class="crd-td">3k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 113 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Portuguese Mozambique: North and Zambezia (1900AD to 1980AD) (top 40 of 153 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Portuguese Mozambique: Central and South

Table \ref{tab:sub-moz-south} records 139 settlements across Manica, Sofala, Inhambane, Gaza, Maputo and adjacent eSwatini and Maputaland, led by Maputo agglomeration (718,4k), Cidade da Beira (213,4k), Chimoio (68k), Cidade de Inhambane (56,3k), Maxixe (55k) and Xai-Xai (43,6k) [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais; @Weeks2013EricAllina].

<figure class="crd-table-figure" id="tab:sub-moz-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Maputo (Agglomeration)</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,3k</td><td class="crd-td">262k</td><td class="crd-td">718,4k</td><td class="crd-td">718,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade da Beira</strong></td><td class="crd-td">MOZ: -19,7, 34,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,6k</td><td class="crd-td">54,6k</td><td class="crd-td">213,4k</td><td class="crd-td">213,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">6,4k</td><td class="crd-td">31,7k</td><td class="crd-td">93,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Chimoio</strong></td><td class="crd-td">MOZ: -19,13, 33,47</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">10,9k</td><td class="crd-td">35,7k</td><td class="crd-td">68k</td><td class="crd-td">68k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Inhambane</strong></td><td class="crd-td">MOZ: -23,94, 35,4</td><td class="crd-td">9,4k</td><td class="crd-td">12,6k</td><td class="crd-td">23,9k</td><td class="crd-td">37,9k</td><td class="crd-td">56,2k</td><td class="crd-td">56,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Maxixe</strong></td><td class="crd-td">MOZ: -23,97, 35,26</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">10,3k</td><td class="crd-td">31,1k</td><td class="crd-td">55k</td><td class="crd-td">55k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Xai-Xai</strong></td><td class="crd-td">MOZ: -25,01, 33,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43,6k</td><td class="crd-td">43,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Beira</strong></td><td class="crd-td">MOZ: -19,84, 34,84</td><td class="crd-td">4,2k</td><td class="crd-td">12k</td><td class="crd-td">42,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Chibuto</strong></td><td class="crd-td">MOZ: -24,7, 33,55</td><td class="crd-td">4,5k</td><td class="crd-td">6k</td><td class="crd-td">11,4k</td><td class="crd-td">19,5k</td><td class="crd-td">30k</td><td class="crd-td">30k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Siboshwa</strong></td><td class="crd-td">ZAF: -25,68, 31,85</td><td class="crd-td">8,6k</td><td class="crd-td">13,3k</td><td class="crd-td">25,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Tembe</strong></td><td class="crd-td">ZAF: -26,97, 32,74</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">8k</td><td class="crd-td">10,7k</td><td class="crd-td">15k</td><td class="crd-td">15k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Inhambane</strong></td><td class="crd-td">MOZ: -23,86, 35,38</td><td class="crd-td">4,9k</td><td class="crd-td">5,6k</td><td class="crd-td">14,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Chicumbane</strong></td><td class="crd-td">MOZ: -24,98, 33,54</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">11,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Chokwe</strong></td><td class="crd-td">MOZ: -24,52, 32,98</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">5,5k</td><td class="crd-td">7,8k</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mbodla</strong></td><td class="crd-td">ZAF: -27,05, 32,22</td><td class="crd-td">4k</td><td class="crd-td">5,5k</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Muzingane</strong></td><td class="crd-td">MOZ: -24,88, 33,51</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Madonela</strong></td><td class="crd-td">ZAF: -27,19, 32,27</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Driekoppies</strong></td><td class="crd-td">ZAF: -25,71, 31,56</td><td class="crd-td">4,6k</td><td class="crd-td">3,9k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuto</strong></td><td class="crd-td">MOZ: -24,69, 33,53</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dondo</strong></td><td class="crd-td">MOZ: -20,99, 34,92</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Manhiça</strong></td><td class="crd-td">MOZ: -25,4, 32,81</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Catembe</strong></td><td class="crd-td">MOZ: -26, 32,56</td><td class="crd-td">3,9k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Marromeu</strong></td><td class="crd-td">MOZ: -18,29, 35,95</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chókwè</strong></td><td class="crd-td">MOZ: -24,53, 32,98</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Eduardo Mondlane</strong></td><td class="crd-td">MOZ: -19,54, 34,64</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">1,2k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chupanga</strong></td><td class="crd-td">MOZ: -18,03, 35,6</td><td class="crd-td">4k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Massinga</strong></td><td class="crd-td">MOZ: -23,27, 35,37</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Macia</strong></td><td class="crd-td">MOZ: -24,9, 33,12</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Marracuene</strong></td><td class="crd-td">MOZ: -25,74, 32,68</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Buzi</strong></td><td class="crd-td">MOZ: -19,89, 34,6</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chinde</strong></td><td class="crd-td">MOZ: -18,58, 36,46</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Inharrime</strong></td><td class="crd-td">MOZ: -24,48, 35,03</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Caia</strong></td><td class="crd-td">MOZ: -17,82, 35,34</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Gondola</strong></td><td class="crd-td">MOZ: -19,08, 33,65</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vilankulo</strong></td><td class="crd-td">MOZ: -22, 35,32</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Vilankulo</strong></td><td class="crd-td">MOZ: -22,01, 35,3</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Homoíne</strong></td><td class="crd-td">MOZ: -23,88, 35,15</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Marromeu</strong></td><td class="crd-td">MOZ: -18,3, 35,93</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 99 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Portuguese Mozambique: Central and South (1900AD to 1980AD) (top 40 of 139 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three caveats apply to this settlement ledger. First, 24 entries contain single-date census observations (chiefly 1976AD in eSwatini, 1977AD in Malawi, 1978AD in Tanzania and 1980AD in Zambia and Mozambique), leaving earlier benchmark columns marked with a hyphen. Second, seven major cities appear with separate city-proper and metropolitan agglomeration records, and Beira transitions from colonial city-proper counts (1891AD to 1950AD) to *Cidade da Beira* (1950AD to 1980AD); paired rows must not be summed together. Third, colonial-era censuses prior to 1962AD in Southern Rhodesia and 1963AD in Northern Rhodesia selectively omitted peri-urban African squatter quarters outside surveyed municipal boundaries [@CASO1960FederationCensus; @Mudeka2016GenderedExclusion].

# Conclusion

Together, these 922 individually assessed settlement series document the growth of colonial capitals, Copperbelt mining towns, Indian Ocean ports and district centres across South-Central Africa and Mozambique from 1890AD to 1980AD, grounding the regional spatial reconstruction in the companion review.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated ledger populations across all eight colonial sub-regions at five benchmarks from 1900AD to 1980AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central (42)</strong></td><td class="crd-td">21,7k</td><td class="crd-td">53,7k</td><td class="crd-td">459k</td><td class="crd-td">913,3k</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern (70)</strong></td><td class="crd-td">26,6k</td><td class="crd-td">94k</td><td class="crd-td">292,3k</td><td class="crd-td">541,8k</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East (95)</strong></td><td class="crd-td">31,3k</td><td class="crd-td">121,5k</td><td class="crd-td">107k</td><td class="crd-td">74,2k</td><td class="crd-td">176,1k</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland (86)</strong></td><td class="crd-td">39,8k</td><td class="crd-td">141,9k</td><td class="crd-td">470,8k</td><td class="crd-td">774,5k</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands (83)</strong></td><td class="crd-td">49k</td><td class="crd-td">120,6k</td><td class="crd-td">358,2k</td><td class="crd-td">395,8k</td><td class="crd-td">603,4k</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate (254)</strong></td><td class="crd-td">235,7k</td><td class="crd-td">441,7k</td><td class="crd-td">591,7k</td><td class="crd-td">362,2k</td><td class="crd-td">451,3k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia (153)</strong></td><td class="crd-td">156,2k</td><td class="crd-td">236,3k</td><td class="crd-td">300,6k</td><td class="crd-td">174,3k</td><td class="crd-td">449,7k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South (139)</strong></td><td class="crd-td">169,7k</td><td class="crd-td">302,8k</td><td class="crd-td">586,5k</td><td class="crd-td">467,5k</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>All Subregions (922)</strong></td><td class="crd-td">729,9k</td><td class="crd-td">1,51M</td><td class="crd-td">3,17M</td><td class="crd-td">3,7M</td><td class="crd-td">7,88M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed site counts and combined interpolated ledger totals across eight colonial sub-regions from 1900AD to 1980AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed census dates; pre-foundation and unrecorded intervals are indicated with a hyphen (-). Combined ledger sums in Table \ref{tab:gazetteer-summary} include both city-proper and paired agglomeration records as catalogued in the raw archive.
