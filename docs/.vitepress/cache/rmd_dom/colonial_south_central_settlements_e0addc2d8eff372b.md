---
title: "Colonial South-Central Africa and Mozambique"
subtitle: "Settlement Gazetteer: 122 Individually Assessed Sites (1890AD-1980AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_south_central_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 122 individually assessed settlements across 10 countries spanning eight colonial sub-regions from 1890AD to 1980AD."
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

This gazetteer compiles spatial coordinates and multi-period population series for 122 individually assessed settlements across 10 countries in South-Central Africa and Mozambique between 1890AD and 1980AD. Screened from 147 candidate colonial towns, mining camps, ports and district stations (25 duplicate alias entries excluded), the retained entries span eight colonial sub-regions across Northern Rhodesia, Southern Rhodesia, Nyasaland, Portuguese Mozambique and adjacent Katanga, Tanzania, Botswana, South Africa, Namibia and eSwatini. Active interpolated entries expand from 20 early centres in 1900AD to 63 in 1920AD, 80 in 1950AD, 62 in 1963AD and 71 in 1980AD, capturing the rise of Maputo agglomeration (718,4k), Harare (656k), Lubumbashi (604k), Lusaka (536k), Bulawayo agglomeration (378k), Ndola (281,3k) and Kitwe (266,3k).



# Background

Colonial urbanisation across South-Central Africa and Mozambique fused mining camp development, railway administration and Indian Ocean port commerce into a distinct regional settlement hierarchy. Whereas coastal centres such as Ilha de Moçambique, Ibo, Sofala, Quelimane, Sena and Tete carried multi-century Portuguese documentary records prior to 1890AD, interior capitals and industrial nodes (Salisbury, Bulawayo, Lusaka, Ndola, Kitwe, Mufulira, Luanshya, Chingola, Lubumbashi and Blantyre) expanded rapidly along newly surveyed railways and mineral belts between 1890AD and 1980AD [@Frederiksen2013SeeingThe; @CASO1960FederationCensus; @Mozambique1940Censo]. Consolidating those series into one harmonised gazetteer clarifies how colonial boundaries, labour reserves and post-colonial independence realigned urban populations [@Mitchell2007IHS; @Moyo2012NamingPractices].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate centres were screened from colonial Southern and Northern Rhodesian censuses (1901AD to 1951AD), Nyasaland protectorate enumerations (1911AD to 1945AD), Federation of Rhodesia and Nyasaland statistics, Mozambique general censuses (1940AD to 1980AD), Belgian Congo annual reports and post-independence national statistical archives [@CASO1960FederationCensus; @Mozambique1940Censo; @Office1949AnnualReport]. Of 147 candidate entries inside the 2.023.960 km² study domain bounded over geoBoundaries national polygons [@Runfola2020GeoBoundaries], 25 duplicate alias records were merged or excluded, retaining 122 individually assessed entries across 541 observations. Each entry is assigned to one of eight colonial sub-regions (113 inside the core mask perimeter and 9 border-margin towns grouped with their adjacent colonial sub-region).

## Spatial Scope and Benchmark Interpolation

The ledger records 115 city-proper series and 7 metropolitan agglomerations (Maputo, Harare, Lubumbashi, Lusaka, Bulawayo, Blantyre and Lilongwe), preserving explicit separation between municipal boundaries and post-1950AD suburban footprints [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais]. Tables 1 to 8 report linearly interpolated populations at five historical checkpoints (1900AD, 1920AD, 1950AD, 1963AD and 1980AD) alongside each record's exact peak population and peak year, marking periods prior to foundation or outside observed census series with a hyphen (-).

# Testing and Validation

Across all 122 entries, rank-size regression on the upper half ($n = 61$) yields a Zipf exponent of $q = 1,15$ ($R^2 = 0,94$), while full-sample regression gives $q = 1,6$ ($R^2 = 0,89$). Deduplicating paired city-proper and metropolitan coordinates into 111 distinct urban peaks produces the curve shown in Figure \ref{fig:settlements-rank} ($q = 1,12$, $R^2 = 0,97$), confirming close log-linear alignment between regional capitals, Copperbelt mining towns and secondary district stations [@Frederiksen2013SeeingThe; @Mitchell2007IHS].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-south-central-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 111 deduplicated settlements (q = 1,12, R² = 0,97) and mean sub-regional density in 1980AD.</figcaption>
</figure>

# Results

## Northern Rhodesia: Copperbelt and Central

Table \ref{tab:sub-nr-copperbelt} records 14 entries across the Zambian Copperbelt, Lusaka, Broken Hill (Kabwe) and adjacent Katanga border posts, led by Lusaka (536k), Ndola (281,3k), Kitwe (266,3k), Kabwe (136k), Mufulira (135,5k), Chingola (130,9k) and Luanshya (110,9k) [@Frederiksen2013SeeingThe; @Macola2008OneZambia].

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
<tr><td class="crd-td"><strong>Chililabombwe</strong></td><td class="crd-td">ZMB: -12,37, 27,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,6k</td><td class="crd-td">54,7k</td><td class="crd-td">54,7k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuluma</strong></td><td class="crd-td">ZMB: -12,85, 28,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,1k</td><td class="crd-td">52,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kafue</strong></td><td class="crd-td">ZMB: -15,77, 28,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,8k</td><td class="crd-td">29,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Balamba/Kasumbalela [ZAR]</strong></td><td class="crd-td">COD: -12,22, 27,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,8k</td><td class="crd-td">25,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kapiri Mposhi</strong></td><td class="crd-td">ZMB: -13,95, 28,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Sakania</strong></td><td class="crd-td">COD: -12,75, 28,56</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1953AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Northern Rhodesia: Copperbelt and Central (1900AD to 1980AD).</figcaption>
</figure>

## Northern Rhodesia: Barotseland and Southern

Table \ref{tab:sub-nr-barotse} details 14 settlements across Barotseland, Southern and North-Western Provinces and the adjacent Katanga-Caprivi frontier, anchored by Lubumbashi (604k city-proper; 435,4k agglomeration), Livingstone (63,3k), Kipushi (46,4k), Mazabuka (29,6k) and Mongu (24,9k) [@Office1949AnnualReport; @CASO1960FederationCensus].

<figure class="crd-table-figure" id="tab:sub-nr-barotse">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lubumbashi</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">16,1k</td><td class="crd-td">103k</td><td class="crd-td">224,2k</td><td class="crd-td">604k</td><td class="crd-td">604k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lubumbashi (Agglomeration)</strong></td><td class="crd-td">COD: -11,66, 27,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">101,8k</td><td class="crd-td">207,9k</td><td class="crd-td">435,4k</td><td class="crd-td">435,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Livingstone</strong></td><td class="crd-td">ZMB: -17,84, 25,85</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">24,6k</td><td class="crd-td">38k</td><td class="crd-td">63,3k</td><td class="crd-td">63,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi</strong></td><td class="crd-td">COD: -11,76, 27,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,3k</td><td class="crd-td">24,9k</td><td class="crd-td">46,4k</td><td class="crd-td">46,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mazabuka</strong></td><td class="crd-td">ZMB: -15,86, 27,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">14,3k</td><td class="crd-td">29,6k</td><td class="crd-td">29,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mongu</strong></td><td class="crd-td">ZMB: -15,27, 23,15</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">3,3k</td><td class="crd-td">7,9k</td><td class="crd-td">24,9k</td><td class="crd-td">24,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Choma</strong></td><td class="crd-td">ZMB: -16,8, 26,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">8,9k</td><td class="crd-td">17,9k</td><td class="crd-td">17,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Solwezi</strong></td><td class="crd-td">ZMB: -12,17, 26,39</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">7,5k</td><td class="crd-td">15k</td><td class="crd-td">15k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Monze</strong></td><td class="crd-td">ZMB: -16,29, 27,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">13,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lealui</strong></td><td class="crd-td">ZMB: -15,23, 23,03</td><td class="crd-td">5,4k</td><td class="crd-td">4,7k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kalomo</strong></td><td class="crd-td">ZMB: -17,02, 26,49</td><td class="crd-td">-</td><td class="crd-td">878</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Katima Mulilo</strong></td><td class="crd-td">NAM: -17,52, 24,3</td><td class="crd-td">-</td><td class="crd-td">654</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kasane</strong></td><td class="crd-td">BWA: -17,8, 25,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">910 (1946AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Northern Rhodesia: Barotseland and Southern (1900AD to 1980AD).</figcaption>
</figure>

## Northern Rhodesia: Northern, Luapula and East

Table \ref{tab:sub-nr-northeast} lists 10 settlements across Northern, Luapula and Eastern Provinces and the Luapula-Mweru border, led by Kasama (38,1k), Mansa (34,8k), Chipata (32,3k) and Mpika (14,4k) [@Hellen1962SomeAspects; @NorthernRhodesia1938Report].

<figure class="crd-table-figure" id="tab:sub-nr-northeast">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kasama</strong></td><td class="crd-td">ZMB: -10,22, 31,2</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,6k</td><td class="crd-td">18k</td><td class="crd-td">38,1k</td><td class="crd-td">38,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mansa</strong></td><td class="crd-td">ZMB: -11,21, 28,89</td><td class="crd-td">-</td><td class="crd-td">828</td><td class="crd-td">2,5k</td><td class="crd-td">15,9k</td><td class="crd-td">34,8k</td><td class="crd-td">34,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chipata</strong></td><td class="crd-td">ZMB: -13,63, 32,63</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">5,7k</td><td class="crd-td">11,3k</td><td class="crd-td">32,3k</td><td class="crd-td">32,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mpika</strong></td><td class="crd-td">ZMB: -11,84, 31,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,4k</td><td class="crd-td">14,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nakonde/Tunduma [ZMB]</strong></td><td class="crd-td">ZMB: -9,32, 32,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">12,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Pweto</strong></td><td class="crd-td">COD: -8,46, 28,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Samfya</strong></td><td class="crd-td">ZMB: -11,36, 29,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mbala</strong></td><td class="crd-td">ZMB: -8,86, 31,35</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,6k</td><td class="crd-td">6,2k</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kasenga 1</strong></td><td class="crd-td">COD: -10,39, 28,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1950AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Northern Rhodesia: Northern, Luapula and East (1900AD to 1980AD).</figcaption>
</figure>

## Southern Rhodesia: Mashonaland and Manicaland

Table \ref{tab:sub-sr-mashona} presents 8 settlements across Mashonaland and Manicaland, led by Harare (656k city-proper; 596,5k agglomeration), Mutare (64,2k), Kadoma (40,6k) and Chinhoyi (22,1k) [@ThomasJBryan2026BritishSouthern; @Mudeka2016GenderedExclusion; @Chingozha2019TheComplementarity].

<figure class="crd-table-figure" id="tab:sub-sr-mashona">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">5k</td><td class="crd-td">15,7k</td><td class="crd-td">119k</td><td class="crd-td">274k</td><td class="crd-td">656k</td><td class="crd-td">656k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Harare (Agglomeration)</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">187,7k</td><td class="crd-td">377,9k</td><td class="crd-td">596,5k</td><td class="crd-td">596,5k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mutare</strong></td><td class="crd-td">ZWE: -18,98, 32,62</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">32,4k</td><td class="crd-td">44,8k</td><td class="crd-td">64,2k</td><td class="crd-td">64,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Kadoma</strong></td><td class="crd-td">ZWE: -18,35, 29,89</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">9,3k</td><td class="crd-td">26,9k</td><td class="crd-td">40,6k</td><td class="crd-td">40,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chinhoyi</strong></td><td class="crd-td">ZWE: -17,38, 30,2</td><td class="crd-td">-</td><td class="crd-td">904</td><td class="crd-td">3,2k</td><td class="crd-td">14,2k</td><td class="crd-td">22,1k</td><td class="crd-td">22,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Marondera</strong></td><td class="crd-td">ZWE: -18,2, 31,53</td><td class="crd-td">-</td><td class="crd-td">998</td><td class="crd-td">3,4k</td><td class="crd-td">11,9k</td><td class="crd-td">18,3k</td><td class="crd-td">18,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Chegutu</strong></td><td class="crd-td">ZWE: -18,14, 30,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,4k</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Bindura</strong></td><td class="crd-td">ZWE: -17,3, 31,33</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,8k</td><td class="crd-td">8,3k</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k (1980AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Southern Rhodesia: Mashonaland and Manicaland (1900AD to 1980AD).</figcaption>
</figure>

## Southern Rhodesia: Matabeleland and Midlands

Table \ref{tab:sub-sr-matabele} catalogues 17 sites across Matabeleland, Midlands, Masvingo and the Tati-Limpopo border, anchored by Bulawayo (378k agglomeration; 92,2k colonial city-proper), Kwekwe (41,4k), Hwange (35,2k), Gweru (31,2k) and Francistown (29,4k) [@CASO1960FederationCensus; @NMMZ2022ZimbabweSites].

<figure class="crd-table-figure" id="tab:sub-sr-matabele">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bulawayo (Agglomeration)</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">115,5k</td><td class="crd-td">269,8k</td><td class="crd-td">378k</td><td class="crd-td">378k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Bulawayo</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">7k</td><td class="crd-td">17,8k</td><td class="crd-td">84,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">92,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Kwekwe</strong></td><td class="crd-td">ZWE: -18,93, 29,81</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">14,2k</td><td class="crd-td">24,1k</td><td class="crd-td">41,4k</td><td class="crd-td">41,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Hwange</strong></td><td class="crd-td">ZWE: -18,36, 26,5</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">15k</td><td class="crd-td">22,5k</td><td class="crd-td">35,2k</td><td class="crd-td">35,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Gweru</strong></td><td class="crd-td">ZWE: -19,46, 29,75</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">15,3k</td><td class="crd-td">17,6k</td><td class="crd-td">31,2k</td><td class="crd-td">31,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Francistown</strong></td><td class="crd-td">BWA: -21,17, 27,52</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">6,1k</td><td class="crd-td">13k</td><td class="crd-td">29,4k</td><td class="crd-td">29,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Masvingo South</strong></td><td class="crd-td">ZWE: -20,09, 30,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">26,1k</td><td class="crd-td">26,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Platinum Mine</strong></td><td class="crd-td">ZWE: -20,3, 30,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">16,8k</td><td class="crd-td">24,6k</td><td class="crd-td">24,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Selebi-Phikwe</strong></td><td class="crd-td">BWA: -21,98, 27,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,2k</td><td class="crd-td">24,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Redcliff</strong></td><td class="crd-td">ZWE: -19,01, 29,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">13,3k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nancefield</strong></td><td class="crd-td">ZAF: -22,34, 30,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">-</td><td class="crd-td">11,9k (1970AD)</td></tr>
<tr><td class="crd-td"><strong>Zvishavane</strong></td><td class="crd-td">ZWE: -20,33, 30,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Masvingo</strong></td><td class="crd-td">ZWE: -20,06, 30,83</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Shurugwi</strong></td><td class="crd-td">ZWE: -19,67, 29,98</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Gwanda</strong></td><td class="crd-td">ZWE: -20,94, 29,02</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Inyati</strong></td><td class="crd-td">ZWE: -19,68, 28,85</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1936AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in Southern Rhodesia: Matabeleland and Midlands (1900AD to 1980AD).</figcaption>
</figure>

## Nyasaland Protectorate

Table \ref{tab:sub-nyasaland} documents 23 settlements across Malawi and the northern Lake Malawi Tanzanian rim, led by Blantyre (248k agglomeration; 222,2k city-proper), Lilongwe (127,9k agglomeration; 102,9k city-proper), Zomba (28,8k) and Mzuzu (21,8k) [@Sawasawa2014LabourExploitation; @Nyasaland1943AgricultureReport; @Moyo2012NamingPractices].

<figure class="crd-table-figure" id="tab:sub-nyasaland">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Blantyre (Agglomeration)</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,5k</td><td class="crd-td">95,7k</td><td class="crd-td">248k</td><td class="crd-td">248k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">2,6k</td><td class="crd-td">6k</td><td class="crd-td">17,6k</td><td class="crd-td">112,4k</td><td class="crd-td">-</td><td class="crd-td">222,2k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Lilongwe (Agglomeration)</strong></td><td class="crd-td">MWI: -13,98, 33,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,2k</td><td class="crd-td">127,9k</td><td class="crd-td">127,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lilongwe</strong></td><td class="crd-td">MWI: -13,98, 33,77</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">8,1k</td><td class="crd-td">52,1k</td><td class="crd-td">-</td><td class="crd-td">102,9k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Zomba</strong></td><td class="crd-td">MWI: -15,34, 35,4</td><td class="crd-td">1,9k</td><td class="crd-td">3,5k</td><td class="crd-td">7,2k</td><td class="crd-td">15,5k</td><td class="crd-td">28,8k</td><td class="crd-td">28,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mzuzu</strong></td><td class="crd-td">MWI: -11,44, 33,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,8k</td><td class="crd-td">21,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Limbe</strong></td><td class="crd-td">MWI: -15,82, 35,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,2k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Karonga</strong></td><td class="crd-td">MWI: -9,98, 33,92</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k</td><td class="crd-td">7,9k</td><td class="crd-td">14k</td><td class="crd-td">14k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhotakota</strong></td><td class="crd-td">MWI: -12,92, 34,28</td><td class="crd-td">7k</td><td class="crd-td">5,3k</td><td class="crd-td">6,2k</td><td class="crd-td">8,2k</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mbinga</strong></td><td class="crd-td">TZA: -10,93, 35,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Tukuyu</strong></td><td class="crd-td">TZA: -9,25, 33,65</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Nsanje</strong></td><td class="crd-td">MWI: -16,9, 35,26</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Dedza</strong></td><td class="crd-td">MWI: -14,39, 34,33</td><td class="crd-td">-</td><td class="crd-td">990</td><td class="crd-td">2,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Mzimba</strong></td><td class="crd-td">MWI: -11,91, 33,6</td><td class="crd-td">-</td><td class="crd-td">866</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">5k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Kyela</strong></td><td class="crd-td">TZA: -9,64, 33,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Salima</strong></td><td class="crd-td">MWI: -13,78, 34,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Thyolo</strong></td><td class="crd-td">MWI: -16,08, 35,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Rumphi</strong></td><td class="crd-td">MWI: -11,02, 33,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Mangochi</strong></td><td class="crd-td">MWI: -14,46, 35,24</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Dowa</strong></td><td class="crd-td">MWI: -13,65, 33,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Livingstonia</strong></td><td class="crd-td">MWI: -10,61, 34,11</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Mchinji</strong></td><td class="crd-td">MWI: -13,79, 32,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1977AD)</td></tr>
<tr><td class="crd-td"><strong>Vwawa</strong></td><td class="crd-td">TZA: -9,1, 32,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1978AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Nyasaland Protectorate (1900AD to 1980AD).</figcaption>
</figure>

## Portuguese Mozambique: North and Zambezia

Table \ref{tab:sub-moz-north} compiles 15 centres across Niassa, Cabo Delgado, Nampula, Zambézia, Tete and the lower Ruvuma margin, headed by Nampula (145,6k), Nacala Porto (74,9k), Quelimane (58,8k), Mtwara (48,5k), Tete (44,9k) and Pemba (41,1k) [@Mozambique1940Censo; @Machaqueiro2013EnsinoPolitica; @Pereira2016CuttingBack].

<figure class="crd-table-figure" id="tab:sub-moz-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nampula</strong></td><td class="crd-td">MOZ: -15,13, 39,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,4k</td><td class="crd-td">20,4k</td><td class="crd-td">145,6k</td><td class="crd-td">145,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Nacala Porto</strong></td><td class="crd-td">MOZ: -14,59, 40,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">35,2k</td><td class="crd-td">74,9k</td><td class="crd-td">74,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Quelimane</strong></td><td class="crd-td">MOZ: -17,83, 36,92</td><td class="crd-td">5,8k</td><td class="crd-td">8,3k</td><td class="crd-td">15,3k</td><td class="crd-td">12,2k</td><td class="crd-td">58,8k</td><td class="crd-td">58,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwara</strong></td><td class="crd-td">TZA: -10,3, 40,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">18k</td><td class="crd-td">26,5k</td><td class="crd-td">48,5k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Tete</strong></td><td class="crd-td">MOZ: -16,14, 33,62</td><td class="crd-td">3,2k</td><td class="crd-td">3,7k</td><td class="crd-td">6,2k</td><td class="crd-td">22,9k</td><td class="crd-td">44,9k</td><td class="crd-td">44,9k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba</strong></td><td class="crd-td">MOZ: -13,01, 40,55</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">8,4k</td><td class="crd-td">24k</td><td class="crd-td">41,1k</td><td class="crd-td">41,1k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Lichinga</strong></td><td class="crd-td">MOZ: -13,3, 35,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">19,4k</td><td class="crd-td">38,8k</td><td class="crd-td">38,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Nacala A Velha</strong></td><td class="crd-td">MOZ: -14,55, 40,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,2k</td><td class="crd-td">19,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Newala</strong></td><td class="crd-td">TZA: -10,93, 39,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">18,4k (1978AD)</td></tr>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">6,4k</td><td class="crd-td">7,5k</td><td class="crd-td">12,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Angoche</strong></td><td class="crd-td">MOZ: -16,21, 39,92</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mikindani</strong></td><td class="crd-td">TZA: -10,28, 40,12</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ibo</strong></td><td class="crd-td">MOZ: -12,34, 40,59</td><td class="crd-td">3,9k</td><td class="crd-td">3,4k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mocimboa da Praia</strong></td><td class="crd-td">MOZ: -11,36, 40,35</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Zumbo</strong></td><td class="crd-td">MOZ: -15,62, 30,44</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1940AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Portuguese Mozambique: North and Zambezia (1900AD to 1980AD).</figcaption>
</figure>

## Portuguese Mozambique: Central and South

Table \ref{tab:sub-moz-south} records 21 settlements across Manica, Sofala, Inhambane, Gaza, Maputo and adjacent eSwatini and Maputaland, led by Maputo agglomeration (718,4k), Cidade da Beira (213,4k), Chimoio (68k), Cidade de Inhambane (56,3k), Maxixe (55k) and Xai-Xai (43,6k) [@Domingos2013DosSuburbios; @Hassane2026InstrumentosLegais; @Weeks2013EricAllina].

<figure class="crd-table-figure" id="tab:sub-moz-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Maputo (Agglomeration)</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,3k</td><td class="crd-td">262k</td><td class="crd-td">718,4k</td><td class="crd-td">718,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade da Beira</strong></td><td class="crd-td">MOZ: -19,7, 34,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,6k</td><td class="crd-td">54,6k</td><td class="crd-td">213,4k</td><td class="crd-td">213,4k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">7,9k</td><td class="crd-td">31,7k</td><td class="crd-td">93,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Chimoio</strong></td><td class="crd-td">MOZ: -19,13, 33,47</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">10,9k</td><td class="crd-td">35,7k</td><td class="crd-td">68k</td><td class="crd-td">68k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Inhambane</strong></td><td class="crd-td">MOZ: -23,94, 35,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56,2k</td><td class="crd-td">56,2k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Maxixe</strong></td><td class="crd-td">MOZ: -23,97, 35,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55k</td><td class="crd-td">55k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Xai-Xai</strong></td><td class="crd-td">MOZ: -25,01, 33,8</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">11,6k</td><td class="crd-td">25,5k</td><td class="crd-td">43,6k</td><td class="crd-td">43,6k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Beira</strong></td><td class="crd-td">MOZ: -19,84, 34,84</td><td class="crd-td">4,2k</td><td class="crd-td">12k</td><td class="crd-td">42,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Chibuto</strong></td><td class="crd-td">MOZ: -24,7, 33,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k</td><td class="crd-td">30k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Tembe</strong></td><td class="crd-td">ZAF: -26,97, 32,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">15k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Inhambane</strong></td><td class="crd-td">MOZ: -23,86, 35,38</td><td class="crd-td">4,9k</td><td class="crd-td">7,4k</td><td class="crd-td">14,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Chokwe</strong></td><td class="crd-td">MOZ: -24,52, 32,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (1980AD)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1892AD)</td></tr>
<tr><td class="crd-td"><strong>Chinde</strong></td><td class="crd-td">MOZ: -18,58, 36,46</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mhlume</strong></td><td class="crd-td">SWZ: -26,03, 31,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1976AD)</td></tr>
<tr><td class="crd-td"><strong>Sena</strong></td><td class="crd-td">MOZ: -17,45, 35,03</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Tjaneni</strong></td><td class="crd-td">SWZ: -25,96, 31,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1976AD)</td></tr>
<tr><td class="crd-td"><strong>Big Bend</strong></td><td class="crd-td">SWZ: -26,79, 31,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1976AD)</td></tr>
<tr><td class="crd-td"><strong>Siteki</strong></td><td class="crd-td">SWZ: -26,44, 31,93</td><td class="crd-td">-</td><td class="crd-td">672</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">720</td><td class="crd-td">935</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1940AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Portuguese Mozambique: Central and South (1900AD to 1980AD).</figcaption>
</figure>

# Limitations

Three caveats apply to this settlement ledger. First, 24 entries contain single-date census observations (chiefly 1976AD in eSwatini, 1977AD in Malawi, 1978AD in Tanzania and 1980AD in Zambia and Mozambique), leaving earlier benchmark columns marked with a hyphen. Second, seven major cities appear with separate city-proper and metropolitan agglomeration records, and Beira transitions from colonial city-proper counts (1891AD to 1950AD) to *Cidade da Beira* (1950AD to 1980AD); paired rows must not be summed together. Third, colonial-era censuses prior to 1962AD in Southern Rhodesia and 1963AD in Northern Rhodesia selectively omitted peri-urban African squatter quarters outside surveyed municipal boundaries [@CASO1960FederationCensus; @Mudeka2016GenderedExclusion].

# Conclusion

Together, these 122 individually assessed settlement series document the growth of colonial capitals, Copperbelt mining towns, Indian Ocean ports and district centres across South-Central Africa and Mozambique from 1890AD to 1980AD, grounding the regional spatial reconstruction in the companion review.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated ledger populations across all eight colonial sub-regions at five benchmarks from 1900AD to 1980AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1900AD</th><th class="crd-th">1920AD</th><th class="crd-th">1950AD</th><th class="crd-th">1963AD</th><th class="crd-th">1980AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Rhodesia: Copperbelt and Central (14)</strong></td><td class="crd-td">0</td><td class="crd-td">9,9k</td><td class="crd-td">360,1k</td><td class="crd-td">875,9k</td><td class="crd-td">2,31M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Barotseland and Southern (14)</strong></td><td class="crd-td">5,4k</td><td class="crd-td">31,6k</td><td class="crd-td">266,8k</td><td class="crd-td">533,6k</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Northern Rhodesia: Northern, Luapula and East (10)</strong></td><td class="crd-td">0</td><td class="crd-td">10k</td><td class="crd-td">20k</td><td class="crd-td">51,4k</td><td class="crd-td">176,1k</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Mashonaland and Manicaland (8)</strong></td><td class="crd-td">5k</td><td class="crd-td">25k</td><td class="crd-td">358,8k</td><td class="crd-td">774,5k</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Southern Rhodesia: Matabeleland and Midlands (17)</strong></td><td class="crd-td">7k</td><td class="crd-td">35,6k</td><td class="crd-td">305,2k</td><td class="crd-td">387,7k</td><td class="crd-td">603,4k</td></tr>
<tr><td class="crd-td"><strong>Nyasaland Protectorate (23)</strong></td><td class="crd-td">12,8k</td><td class="crd-td">27,4k</td><td class="crd-td">96,2k</td><td class="crd-td">330,1k</td><td class="crd-td">451,3k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: North and Zambezia (15)</strong></td><td class="crd-td">20,8k</td><td class="crd-td">36,5k</td><td class="crd-td">89,3k</td><td class="crd-td">162,5k</td><td class="crd-td">449,7k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Mozambique: Central and South (21)</strong></td><td class="crd-td">25,2k</td><td class="crd-td">70,5k</td><td class="crd-td">325,9k</td><td class="crd-td">379,2k</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>All Subregions (122)</strong></td><td class="crd-td">76,2k</td><td class="crd-td">246,4k</td><td class="crd-td">1,82M</td><td class="crd-td">3,49M</td><td class="crd-td">7,88M</td></tr>
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
