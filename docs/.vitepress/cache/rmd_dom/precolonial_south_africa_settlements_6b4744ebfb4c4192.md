---
title: "Pre-Colonial Southern Africa and the Cape Frontier"
subtitle: "Settlement Gazetteer: 1.567 Individually Assessed Sites (1500AD-1902)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: precolonial_south_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 1.567 individually assessed settlements across eight Southern African countries spanning ten historical sub-regions from 1500AD to 1902AD."
hero_label: "fig:hero-settlements-south-africa"

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

This gazetteer compiles coordinates and multi-period population series for 1.567 individually assessed settlements across eight Southern African countries between 1500AD and 1902AD. Screened from 2.020 candidate towns, royal capitals, mission stations, Boer republic seats, stone-walled Tswana *merafe* and colonial ports (453 duplicate records excluded), the retained entries span ten historical sub-regions from the Western Cape to Matabeleland, Ovamboland and the lower Zambezi. Active interpolated sites grow from 396 in 1500AD to 266 in 1700AD, 321 in 1800AD, 398 in 1850AD, 586 in 1875 and 623 in 1890, tracing the shift from indigenous capitals such as Shoshong (26,4k), Kaditshwene (18,4k) and Dithakong (16,8k) to colonial ports and mining hubs led by Johannesburg (102,1k in 1896), Durban (68k in 1900), Cape Town (51,3k in 1891), Port Elizabeth (33k), Pretoria (33k) and Kimberley (28,7k).



# Background

Assembling a unified urban ledger for Southern Africa from 1500AD to 1902AD requires bridging distinct documentary and archaeological traditions. Along the Cape Colony and Natal littoral, Dutch VOC *opgaafrollen* and British municipal census returns provide regular headcounts for administrative towns and mission villages [@Shell1994ChildrenBondage; @Catalog1800StatisticalRegister; @Vink2019FromThe]. Across the interior plateaus of the Highveld, Bechuanaland, Zululand, Lesotho and Zimbabwe, urban scale is attested instead through nineteenth-century traveller itineraries, missionary journals and archaeological surveys of dry-stone compounds and royal *amakhanda* barracks [@Gulbrandsen1993TheRise; @Pikirayi2001ZimbabweCulture; @SAHRIS2024SouthAfrica; @NMMZ2022ZimbabweSites]. Uniting those sources under uniform spatial bounds exposes the demographic transition from pre-colonial Tswana and Rozvi agro-towns to late nineteenth-century mining and railway centres [@Barrow1801AccountTravels; @Smith1849IllustrationsThe].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate localities were compiled from colonial blue books, Cape archives, missionary station returns and regional archaeological registers [@Catalog1800StatisticalRegister; @SAHRIS2024SouthAfrica; @NMMZ2022ZimbabweSites]. Within the 3.360.053 km² study domain bounded over geoBoundaries outlines [@Runfola2020GeoBoundaries], 453 duplicate orthographies and overlapping historical records were merged, retaining 1.567 individually assessed settlements across 4.465 dated observations. Each settlement is assigned to one of ten historical sub-regions (161 within the 0,25-degree polygon mask plus Massangano-Zambezi and Manyikeni assigned to the neighbouring Rozvi-Mashonaland division).

## Site-Specific Population Estimation

All 1.567 entries record city-proper limits (163 city-proper, 0 metro) grounded in enumerated census returns, missionary residence tallies or mapped compound footprints [@LaCroix2016KhoikhoiPopulation; @ElphickGiliomee1989Shaping; @Deflem2022WarfarePolitical]. Tables 1 to 10 present linearly interpolated populations at five benchmark years (1700, 1800, 1850, 1875 and 1890) alongside each settlement's exact peak population and peak year, leaving pre-foundation and post-abandonment benchmarks marked by a hyphen (-).

# Testing and Validation

Across the 1.567 settlements, ordinary least-squares rank-size regression on the upper half (180 sites) produces a Zipf exponent of $q = 0,89$ ($R^2 = 0,98$; full-sample $q = 1,13$, $R^2 = 0,93$; Figure \ref{fig:settlements-rank}). Screening eliminates duplicate colonial and indigenous toponyms while preserving historical continuity across renamings such as Mangaung (Bloemfontein) and Ulundi (Ondini) [@Leanya2024ChurchAnd; @Deflem2022WarfarePolitical].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-precolonial-south-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 1.567 settlements (q = 0,89, R² = 0,98) and mean sub-regional density in 1900AD.</figcaption>
</figure>

# Results

## Western Cape and VOC-British Heartland

Table \ref{tab:sub-western-cape} records 175 settlements across the Western Cape, Boland and Namaqualand copper margin, tracing Cape Town, Stellenbosch, Paarl, Worcester, Oudtshoorn and Swellendam alongside early Khoikhoi polities at Cochoqua Kraal and Hessequa [@LaCroix2016KhoikhoiPopulation; @Guelke1976FrontierSettlement].

<figure class="crd-table-figure" id="tab:sub-western-cape">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cape Town</strong></td><td class="crd-td">ZAF: -33,98, 18,53</td><td class="crd-td">1,7k</td><td class="crd-td">15,7k</td><td class="crd-td">290k</td><td class="crd-td">33,2k</td><td class="crd-td">79k</td><td class="crd-td">290k (1850)</td></tr>
<tr><td class="crd-td"><strong>Khayelitsa</strong></td><td class="crd-td">ZAF: -34,04, 18,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Woodstock</strong></td><td class="crd-td">ZAF: -33,93, 18,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">9,1k</td><td class="crd-td">9,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Paarl</strong></td><td class="crd-td">ZAF: -33,71, 18,96</td><td class="crd-td">480</td><td class="crd-td">1,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k</td><td class="crd-td">7,5k</td><td class="crd-td">7,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Claremont</strong></td><td class="crd-td">ZAF: -33,98, 18,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">6k</td><td class="crd-td">6,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Worcester</strong></td><td class="crd-td">ZAF: -33,64, 19,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,8k</td><td class="crd-td">5,3k</td><td class="crd-td">5,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Wynberg</strong></td><td class="crd-td">ZAF: -34,01, 18,47</td><td class="crd-td">-</td><td class="crd-td">753</td><td class="crd-td">2,1k</td><td class="crd-td">3,8k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Oudtshoorn</strong></td><td class="crd-td">ZAF: -33,59, 22,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Stellenbosch</strong></td><td class="crd-td">ZAF: -33,93, 18,87</td><td class="crd-td">640</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k (1875)</td></tr>
<tr><td class="crd-td"><strong>Simon's Town</strong></td><td class="crd-td">ZAF: -34,19, 18,43</td><td class="crd-td">-</td><td class="crd-td">762</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,5k</td><td class="crd-td">3,6k (1891)</td></tr>
<tr><td class="crd-td"><strong>Cochoqua Kraal</strong></td><td class="crd-td">ZAF: -33,01, 18,07</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1652)</td></tr>
<tr><td class="crd-td"><strong>Strandfontein</strong></td><td class="crd-td">ZAF: -34,07, 18,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Genadendal</strong></td><td class="crd-td">ZAF: -34,04, 19,56</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k (1849)</td></tr>
<tr><td class="crd-td"><strong>Beaufort West</strong></td><td class="crd-td">ZAF: -32,36, 22,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Wellington</strong></td><td class="crd-td">ZAF: -33,64, 19,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Hessequa</strong></td><td class="crd-td">ZAF: -34,09, 20,82</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1667)</td></tr>
<tr><td class="crd-td"><strong>Hessequa</strong></td><td class="crd-td">ZAF: -34,12, 20,45</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1660)</td></tr>
<tr><td class="crd-td"><strong>Diazville</strong></td><td class="crd-td">ZAF: -33,01, 17,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Reception Shelter</strong></td><td class="crd-td">ZAF: -31,53, 18,6</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1749)</td></tr>
<tr><td class="crd-td"><strong>Aspoort Cave</strong></td><td class="crd-td">ZAF: -32,5, 19,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500)</td></tr>
<tr><td class="crd-td"><strong>Malmesbury</strong></td><td class="crd-td">ZAF: -33,46, 18,73</td><td class="crd-td">-</td><td class="crd-td">429</td><td class="crd-td">1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Byneskranskop 1 Cave</strong></td><td class="crd-td">ZAF: -34,58, 19,47</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1718)</td></tr>
<tr><td class="crd-td"><strong>De Hangen</strong></td><td class="crd-td">ZAF: -32,08, 18,87</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1600)</td></tr>
<tr><td class="crd-td"><strong>Komkans 2</strong></td><td class="crd-td">ZAF: -31,24, 18,05</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1885)</td></tr>
<tr><td class="crd-td"><strong>Robertson</strong></td><td class="crd-td">ZAF: -33,8, 19,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Swellendam</strong></td><td class="crd-td">ZAF: -34,03, 20,44</td><td class="crd-td">-</td><td class="crd-td">657</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td><td class="crd-td">2k (1865)</td></tr>
<tr><td class="crd-td"><strong>Somerset West</strong></td><td class="crd-td">ZAF: -34,08, 18,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Voelvlei</strong></td><td class="crd-td">ZAF: -33,23, 19,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1573)</td></tr>
<tr><td class="crd-td"><strong>Okiep</strong></td><td class="crd-td">ZAF: -29,59, 17,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Elands Bay</strong></td><td class="crd-td">ZAF: -32,31, 18,34</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1800)</td></tr>
<tr><td class="crd-td"><strong>Riversdale</strong></td><td class="crd-td">ZAF: -34,09, 21,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Ceres</strong></td><td class="crd-td">ZAF: -33,37, 19,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Buffelskloof</strong></td><td class="crd-td">ZAF: -33,67, 21,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1500)</td></tr>
<tr><td class="crd-td"><strong>Strand</strong></td><td class="crd-td">ZAF: -34,11, 18,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1891)</td></tr>
<tr><td class="crd-td"><strong>Blombos Cave</strong></td><td class="crd-td">ZAF: -34,42, 21,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1657)</td></tr>
<tr><td class="crd-td"><strong>Wesbank</strong></td><td class="crd-td">ZAF: -33,46, 18,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Hout Bay</strong></td><td class="crd-td">ZAF: -34,03, 18,36</td><td class="crd-td">444</td><td class="crd-td">597</td><td class="crd-td">942</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Leliefontein</strong></td><td class="crd-td">ZAF: -30,31, 18,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">910</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Prince Albert</strong></td><td class="crd-td">ZAF: -33,22, 22,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Elim</strong></td><td class="crd-td">ZAF: -34,59, 19,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">856</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>... plus 135 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Western Cape and VOC-British Heartland (1500AD to 1902AD) (top 40 of 175 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Eastern Cape Frontier, Xhosa and Transkei

Table \ref{tab:sub-eastern-cape} lists 198 settlements across the Eastern Cape, Karoo margin and Transkei, led by Port Elizabeth, Grahamstown, King Williams Town, East London and Graaff-Reinet [@Barrow1801AccountTravels; @Catalog1800StatisticalRegister].

<figure class="crd-table-figure" id="tab:sub-eastern-cape">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Elizabeth</strong></td><td class="crd-td">ZAF: -33,92, 25,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">13k</td><td class="crd-td">23k</td><td class="crd-td">33k (1900)</td></tr>
<tr><td class="crd-td"><strong>Grahamstown</strong></td><td class="crd-td">ZAF: -33,3, 26,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,9k</td><td class="crd-td">10,3k</td><td class="crd-td">10,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Rhini</strong></td><td class="crd-td">ZAF: -33,29, 26,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kwanobuhle South</strong></td><td class="crd-td">ZAF: -33,83, 25,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>King Williams Town</strong></td><td class="crd-td">ZAF: -32,9, 27,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">7,1k</td><td class="crd-td">7,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>East London</strong></td><td class="crd-td">ZAF: -32,98, 27,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k</td><td class="crd-td">6,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Graaff Reinet</strong></td><td class="crd-td">ZAF: -32,25, 24,53</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Uitenhage</strong></td><td class="crd-td">ZAF: -33,76, 25,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Qaukeni</strong></td><td class="crd-td">ZAF: -31,37, 29,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,2k</td><td class="crd-td">3,9k</td><td class="crd-td">5,2k (1878)</td></tr>
<tr><td class="crd-td"><strong>Ntaba kaNdoda</strong></td><td class="crd-td">ZAF: -32,78, 27,15</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1817)</td></tr>
<tr><td class="crd-td"><strong>Sijinji</strong></td><td class="crd-td">ZAF: -31,2, 29,71</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Cradock</strong></td><td class="crd-td">ZAF: -32,16, 25,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Mdantsane West</strong></td><td class="crd-td">ZAF: -32,94, 27,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Queenstown</strong></td><td class="crd-td">ZAF: -31,9, 26,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4k</td><td class="crd-td">4,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Kwanobuhle</strong></td><td class="crd-td">ZAF: -33,81, 25,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Hohita</strong></td><td class="crd-td">ZAF: -32,26, 28,09</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1834)</td></tr>
<tr><td class="crd-td"><strong>Mbizana</strong></td><td class="crd-td">ZAF: -30,93, 29,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Sipaqeni</strong></td><td class="crd-td">ZAF: -31,09, 29,51</td><td class="crd-td">-</td><td class="crd-td">983</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Tsikelo</strong></td><td class="crd-td">ZAF: -30,84, 29,76</td><td class="crd-td">-</td><td class="crd-td">960</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Vuxuzithathe</strong></td><td class="crd-td">ZAF: -30,82, 30,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Oyengweni</strong></td><td class="crd-td">ZAF: -32,73, 26,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1818)</td></tr>
<tr><td class="crd-td"><strong>Somerset East</strong></td><td class="crd-td">ZAF: -32,72, 25,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Borchers Shelter</strong></td><td class="crd-td">ZAF: -30,69, 30,38</td><td class="crd-td">2,9k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700)</td></tr>
<tr><td class="crd-td"><strong>Beersheba</strong></td><td class="crd-td">ZAF: -30,23, 26,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1857)</td></tr>
<tr><td class="crd-td"><strong>Melikane</strong></td><td class="crd-td">LSO: -29,95, 28,75</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1754)</td></tr>
<tr><td class="crd-td"><strong>Strathalan A</strong></td><td class="crd-td">ZAF: -30,98, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1647)</td></tr>
<tr><td class="crd-td"><strong>Malubelube</strong></td><td class="crd-td">ZAF: -30,26, 28,79</td><td class="crd-td">-</td><td class="crd-td">955</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>George</strong></td><td class="crd-td">ZAF: -33,98, 22,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Bathurst</strong></td><td class="crd-td">ZAF: -33,5, 26,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">469</td><td class="crd-td">538</td><td class="crd-td">2,4k (1850)</td></tr>
<tr><td class="crd-td"><strong>Nqadu</strong></td><td class="crd-td">ZAF: -32,27, 28,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Nkampini</strong></td><td class="crd-td">ZAF: -30,92, 30,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mossel Bay</strong></td><td class="crd-td">ZAF: -34,16, 22,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Kokstad</strong></td><td class="crd-td">ZAF: -30,54, 29,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Aliwal North</strong></td><td class="crd-td">ZAF: -30,69, 26,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Nzimakwe</strong></td><td class="crd-td">ZAF: -30,99, 30,23</td><td class="crd-td">-</td><td class="crd-td">761</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Nyandeni</strong></td><td class="crd-td">ZAF: -31,45, 28,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1875)</td></tr>
<tr><td class="crd-td"><strong>Scott's Cave</strong></td><td class="crd-td">ZAF: -33,73, 24,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1586)</td></tr>
<tr><td class="crd-td"><strong>Edgehill</strong></td><td class="crd-td">ZAF: -32,93, 26,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1657)</td></tr>
<tr><td class="crd-td"><strong>Ndevana</strong></td><td class="crd-td">ZAF: -32,91, 27,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Philippolis</strong></td><td class="crd-td">ZAF: -30,27, 25,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">978</td><td class="crd-td">960</td><td class="crd-td">1,9k (1850)</td></tr>
<tr><td class="crd-td"><strong>... plus 158 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Eastern Cape Frontier, Xhosa and Transkei (1500AD to 1902AD) (top 40 of 198 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Griqualand West, Karoo and Orange Frontier

Table \ref{tab:sub-griqualand} details 66 settlements across Griqualand West, the Orange River valley and the Northern Karoo, led by Dithakong (16,8k), Kuruman (8,4k) and Griekwastad (1,92k) [@Smith1849IllustrationsThe].

<figure class="crd-table-figure" id="tab:sub-griqualand">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dithakong</strong></td><td class="crd-td">ZAF: -27,08, 23,92</td><td class="crd-td">-</td><td class="crd-td">755</td><td class="crd-td">755</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">16,8k (1801)</td></tr>
<tr><td class="crd-td"><strong>Kuruman</strong></td><td class="crd-td">ZAF: -27,46, 23,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">10k (1820)</td></tr>
<tr><td class="crd-td"><strong>Batlharo</strong></td><td class="crd-td">ZAF: -27,38, 23,48</td><td class="crd-td">689</td><td class="crd-td">922</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Batlharos 1</strong></td><td class="crd-td">ZAF: -27,3, 23,33</td><td class="crd-td">986</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Griekwastad</strong></td><td class="crd-td">ZAF: -28,85, 23,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1.000</td><td class="crd-td">1k</td><td class="crd-td">1,9k (1845)</td></tr>
<tr><td class="crd-td"><strong>Ganyesa</strong></td><td class="crd-td">ZAF: -26,6, 24,18</td><td class="crd-td">482</td><td class="crd-td">710</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Morokweng</strong></td><td class="crd-td">ZAF: -26,11, 23,77</td><td class="crd-td">412</td><td class="crd-td">573</td><td class="crd-td">865</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Victoria West</strong></td><td class="crd-td">ZAF: -31,4, 23,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k (1875)</td></tr>
<tr><td class="crd-td"><strong>Richmond (Cape)</strong></td><td class="crd-td">ZAF: -31,41, 23,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">925</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Warmbad</strong></td><td class="crd-td">NAM: -28,45, 18,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">711</td><td class="crd-td">920</td><td class="crd-td">1,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Upington</strong></td><td class="crd-td">ZAF: -28,45, 21,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Campbell</strong></td><td class="crd-td">ZAF: -28,8, 23,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">889</td><td class="crd-td">767</td><td class="crd-td">-</td><td class="crd-td">1,1k (1820)</td></tr>
<tr><td class="crd-td"><strong>Heuningvlei 2</strong></td><td class="crd-td">ZAF: -26,18, 23,18</td><td class="crd-td">794</td><td class="crd-td">693</td><td class="crd-td">617</td><td class="crd-td">804</td><td class="crd-td">915</td><td class="crd-td">990 (1900)</td></tr>
<tr><td class="crd-td"><strong>Carnarvon</strong></td><td class="crd-td">ZAF: -30,97, 22,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760</td><td class="crd-td">916</td><td class="crd-td">926 (1891)</td></tr>
<tr><td class="crd-td"><strong>Port Nolloth</strong></td><td class="crd-td">ZAF: -29,25, 16,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">835</td><td class="crd-td">855 (1891)</td></tr>
<tr><td class="crd-td"><strong>Keikarieseiland</strong></td><td class="crd-td">ZAF: -28,68, 20,5</td><td class="crd-td">576</td><td class="crd-td">528</td><td class="crd-td">511</td><td class="crd-td">682</td><td class="crd-td">784</td><td class="crd-td">852 (1900)</td></tr>
<tr><td class="crd-td"><strong>Britstown</strong></td><td class="crd-td">ZAF: -30,59, 23,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">850 (1891)</td></tr>
<tr><td class="crd-td"><strong>Pella Namaqualand</strong></td><td class="crd-td">ZAF: -29,03, 19,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">502</td><td class="crd-td">606</td><td class="crd-td">833</td><td class="crd-td">848 (1891)</td></tr>
<tr><td class="crd-td"><strong>Douglas</strong></td><td class="crd-td">ZAF: -29,06, 23,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">565</td><td class="crd-td">798</td><td class="crd-td">814 (1891)</td></tr>
<tr><td class="crd-td"><strong>Olifantshoek</strong></td><td class="crd-td">ZAF: -27,95, 22,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">742</td><td class="crd-td">774 (1891)</td></tr>
<tr><td class="crd-td"><strong>Thomas' Farm, Hopetown</strong></td><td class="crd-td">ZAF: -29,42, 24,03</td><td class="crd-td">550</td><td class="crd-td">518</td><td class="crd-td">470</td><td class="crd-td">622</td><td class="crd-td">713</td><td class="crd-td">774 (1900)</td></tr>
<tr><td class="crd-td"><strong>Nuwerus NC</strong></td><td class="crd-td">ZAF: -28,47, 21,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">721 (1891)</td></tr>
<tr><td class="crd-td"><strong>Blinkklipkop</strong></td><td class="crd-td">ZAF: -28,3, 23,11</td><td class="crd-td">533</td><td class="crd-td">582</td><td class="crd-td">604</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">613 (1869)</td></tr>
<tr><td class="crd-td"><strong>Keimoes</strong></td><td class="crd-td">ZAF: -28,7, 20,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">566 (1891)</td></tr>
<tr><td class="crd-td"><strong>Prieska</strong></td><td class="crd-td">ZAF: -29,67, 22,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">530 (1891)</td></tr>
<tr><td class="crd-td"><strong>Springbokoog 5</strong></td><td class="crd-td">ZAF: -30,22, 21,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">529 (1647)</td></tr>
<tr><td class="crd-td"><strong>Biesjesfontein 1</strong></td><td class="crd-td">ZAF: -31,47, 23,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">503 (1665)</td></tr>
<tr><td class="crd-td"><strong>Bokvasmaak 3</strong></td><td class="crd-td">ZAF: -28,47, 20,11</td><td class="crd-td">429</td><td class="crd-td">303</td><td class="crd-td">265</td><td class="crd-td">356</td><td class="crd-td">410</td><td class="crd-td">446 (1900)</td></tr>
<tr><td class="crd-td"><strong>Meidekop 1</strong></td><td class="crd-td">ZAF: -28,28, 22,55</td><td class="crd-td">314</td><td class="crd-td">292</td><td class="crd-td">280</td><td class="crd-td">360</td><td class="crd-td">409</td><td class="crd-td">441 (1900)</td></tr>
<tr><td class="crd-td"><strong>Dibeng</strong></td><td class="crd-td">ZAF: -27,59, 22,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">437 (1891)</td></tr>
<tr><td class="crd-td"><strong>Pomfret 1</strong></td><td class="crd-td">ZAF: -25,83, 23,5</td><td class="crd-td">437</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">437 (1700)</td></tr>
<tr><td class="crd-td"><strong>Kenhardt</strong></td><td class="crd-td">ZAF: -29,35, 21,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">415 (1891)</td></tr>
<tr><td class="crd-td"><strong>Travalia nr Three Sisters</strong></td><td class="crd-td">ZAF: -31,8, 23,05</td><td class="crd-td">415</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">415 (1600)</td></tr>
<tr><td class="crd-td"><strong>Droëgrond B</strong></td><td class="crd-td">ZAF: -29,12, 20,26</td><td class="crd-td">405</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">405 (1700)</td></tr>
<tr><td class="crd-td"><strong>Bokvasmaak 4</strong></td><td class="crd-td">ZAF: -28,5, 20,23</td><td class="crd-td">389</td><td class="crd-td">339</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">389 (1600)</td></tr>
<tr><td class="crd-td"><strong>Leeufontein 122</strong></td><td class="crd-td">ZAF: -30,98, 22,05</td><td class="crd-td">387</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">387 (1700)</td></tr>
<tr><td class="crd-td"><strong>Dikbosch 1</strong></td><td class="crd-td">ZAF: -28,65, 23,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">386 (1500)</td></tr>
<tr><td class="crd-td"><strong>Danielskuil</strong></td><td class="crd-td">ZAF: -28,19, 23,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">382</td><td class="crd-td">-</td><td class="crd-td">382 (1875)</td></tr>
<tr><td class="crd-td"><strong>Goodhouse</strong></td><td class="crd-td">ZAF: -28,9, 18,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">161</td><td class="crd-td">279</td><td class="crd-td">374</td><td class="crd-td">380 (1891)</td></tr>
<tr><td class="crd-td"><strong>Biesje Poort 2</strong></td><td class="crd-td">ZAF: -28,43, 20,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">373 (1637)</td></tr>
<tr><td class="crd-td"><strong>... plus 26 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Griqualand West, Karoo and the Orange Frontier (1500AD to 1902AD) (top 40 of 66 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Orange Free State and Basutoland

Table \ref{tab:sub-ofs} compiles 153 settlements across the Orange Free State, Lesotho and the Kimberley diamond borderland, anchored by Kimberley (28,7k), Taung (14,2k), Thaba Nchu (12,6k), Thaba Bosiu (8,92k) and Mangaung or Bloemfontein (3,38k) [@Leanya2024ChurchAnd; @Catalog1800StatisticalRegister].

<figure class="crd-table-figure" id="tab:sub-ofs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kimberley</strong></td><td class="crd-td">ZAF: -28,74, 24,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">27,7k</td><td class="crd-td">28,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Taung</strong></td><td class="crd-td">ZAF: -27,54, 24,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">14,2k</td><td class="crd-td">11,9k</td><td class="crd-td">14,2k (1875)</td></tr>
<tr><td class="crd-td"><strong>Thaba Nchu</strong></td><td class="crd-td">ZAF: -29,21, 26,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">11,2k</td><td class="crd-td">3,2k</td><td class="crd-td">12,6k (1880)</td></tr>
<tr><td class="crd-td"><strong>Beaconsfield</strong></td><td class="crd-td">ZAF: -28,75, 24,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">10,1k</td><td class="crd-td">10,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Botshabelo North</strong></td><td class="crd-td">ZAF: -29,22, 26,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1900)</td></tr>
<tr><td class="crd-td"><strong>Thaba Bosiu</strong></td><td class="crd-td">LSO: -29,37, 27,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1848)</td></tr>
<tr><td class="crd-td"><strong>Rammulutsi</strong></td><td class="crd-td">ZAF: -27,2, 26,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Orkney Central</strong></td><td class="crd-td">ZAF: -26,99, 26,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mafikeng</strong></td><td class="crd-td">ZAF: -25,92, 25,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,4k</td><td class="crd-td">6,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Basoto</strong></td><td class="crd-td">ZAF: -30,51, 27,37</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">5,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Maputsoe</strong></td><td class="crd-td">LSO: -28,92, 27,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Klerksdorp</strong></td><td class="crd-td">ZAF: -26,86, 26,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1890)</td></tr>
<tr><td class="crd-td"><strong>Botshabelo West</strong></td><td class="crd-td">ZAF: -29,26, 26,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Jagersfontein</strong></td><td class="crd-td">ZAF: -29,76, 25,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1890)</td></tr>
<tr><td class="crd-td"><strong>Mangaung</strong></td><td class="crd-td">ZAF: -29,12, 26,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">418</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1890)</td></tr>
<tr><td class="crd-td"><strong>Tsiame</strong></td><td class="crd-td">LSO: -29,41, 27,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">3,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Makgwareng</strong></td><td class="crd-td">ZAF: -28,08, 27,62</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1790)</td></tr>
<tr><td class="crd-td"><strong>Sedan</strong></td><td class="crd-td">ZAF: -27,84, 27,64</td><td class="crd-td">1,7k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1800)</td></tr>
<tr><td class="crd-td"><strong>Khotsong</strong></td><td class="crd-td">ZAF: -27,38, 26,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Bultfontein</strong></td><td class="crd-td">ZAF: -29,19, 26,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Madibogo</strong></td><td class="crd-td">ZAF: -26,42, 25,17</td><td class="crd-td">880</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Makgwareng</strong></td><td class="crd-td">ZAF: -28,48, 27,64</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1780)</td></tr>
<tr><td class="crd-td"><strong>Colwinton</strong></td><td class="crd-td">ZAF: -31,15, 27,77</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700)</td></tr>
<tr><td class="crd-td"><strong>Askoppies</strong></td><td class="crd-td">ZAF: -27,5, 27,82</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1800)</td></tr>
<tr><td class="crd-td"><strong>Muela ('Muela)</strong></td><td class="crd-td">LSO: -28,77, 28,46</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>Makgwareng OO1</strong></td><td class="crd-td">ZAF: -27,91, 27,91</td><td class="crd-td">2,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1879)</td></tr>
<tr><td class="crd-td"><strong>Morija</strong></td><td class="crd-td">LSO: -29,63, 27,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k (1875)</td></tr>
<tr><td class="crd-td"><strong>Bolahla</strong></td><td class="crd-td">LSO: -30,07, 28,41</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1859)</td></tr>
<tr><td class="crd-td"><strong>Butha-Buthe</strong></td><td class="crd-td">LSO: -28,77, 28,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">2,6k (1822)</td></tr>
<tr><td class="crd-td"><strong>Rose Cottage Cave</strong></td><td class="crd-td">ZAF: -29,25, 27,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500)</td></tr>
<tr><td class="crd-td"><strong>Tsikoane</strong></td><td class="crd-td">LSO: -28,93, 28,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Matsieng</strong></td><td class="crd-td">LSO: -29,62, 27,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Wesselsbron</strong></td><td class="crd-td">ZAF: -27,85, 26,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Ha Makotoko Rock Shelter</strong></td><td class="crd-td">LSO: -29,33, 27,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1647)</td></tr>
<tr><td class="crd-td"><strong>Nooitgedacht 1</strong></td><td class="crd-td">ZAF: -28,58, 24,63</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">944</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mount Moorosi</strong></td><td class="crd-td">LSO: -30,27, 27,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1879)</td></tr>
<tr><td class="crd-td"><strong>Ipelegeng</strong></td><td class="crd-td">ZAF: -27,2, 25,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Dukuza</strong></td><td class="crd-td">ZAF: -28,74, 29,18</td><td class="crd-td">-</td><td class="crd-td">779</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Phitshane Molopo</strong></td><td class="crd-td">BWA: -25,73, 25,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1880)</td></tr>
<tr><td class="crd-td"><strong>Setlagole</strong></td><td class="crd-td">ZAF: -26,29, 25,13</td><td class="crd-td">545</td><td class="crd-td">758</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>... plus 113 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Orange Free State and Basutoland (1500AD to 1902AD) (top 40 of 153 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Zulu Kingdom and Colony of Natal

Table \ref{tab:sub-natal} presents 194 settlements across Natal, Zululand and eSwatini, contrasting colonial ports and towns (Durban at 68k, Pietermaritzburg at 17,5k) with Zulu and Swazi royal capitals at KwaBulawayo (9,24k), uMgungundlovu (8,64k), Ulundi or Ondini (6,48k), Nodwengu (5,42k) and Lobamba (5,15k) [@Deflem2022WarfarePolitical].

<figure class="crd-table-figure" id="tab:sub-natal">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Durban</strong></td><td class="crd-td">ZAF: -29,85, 31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">7,5k</td><td class="crd-td">18k</td><td class="crd-td">68k (1900)</td></tr>
<tr><td class="crd-td"><strong>Pietermaritzburg</strong></td><td class="crd-td">ZAF: -29,63, 30,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">6,8k</td><td class="crd-td">16,8k</td><td class="crd-td">17,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>KwaBulawayo</strong></td><td class="crd-td">ZAF: -28,76, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k (1825)</td></tr>
<tr><td class="crd-td"><strong>Mpumalanga</strong></td><td class="crd-td">ZAF: -29,81, 30,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>uMgungundlovu</strong></td><td class="crd-td">ZAF: -28,43, 31,27</td><td class="crd-td">1,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">8,6k (1836)</td></tr>
<tr><td class="crd-td"><strong>Lekwa</strong></td><td class="crd-td">ZAF: -26,95, 29,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Empumalanga</strong></td><td class="crd-td">ZAF: -29,82, 30,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Ulundi</strong></td><td class="crd-td">ZAF: -28,27, 31,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,5k (1878)</td></tr>
<tr><td class="crd-td"><strong>Stanger</strong></td><td class="crd-td">ZAF: -29,34, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">714</td><td class="crd-td">443</td><td class="crd-td">5,6k (1827)</td></tr>
<tr><td class="crd-td"><strong>Nodwengu</strong></td><td class="crd-td">ZAF: -28,32, 31,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1865)</td></tr>
<tr><td class="crd-td"><strong>Ndwedwe</strong></td><td class="crd-td">ZAF: -29,33, 30,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">5,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Nseleni</strong></td><td class="crd-td">ZAF: -28,65, 32,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Gcumisa</strong></td><td class="crd-td">ZAF: -29,53, 30,69</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td><td class="crd-td">3,8k</td><td class="crd-td">5,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Fernie</strong></td><td class="crd-td">ZAF: -26,43, 30,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Lobamba</strong></td><td class="crd-td">SWZ: -26,45, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td><td class="crd-td">5,2k (1894)</td></tr>
<tr><td class="crd-td"><strong>Duku</strong></td><td class="crd-td">ZAF: -28,4, 32,34</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">5k</td><td class="crd-td">5,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Dlamini</strong></td><td class="crd-td">ZAF: -27,4, 30,94</td><td class="crd-td">-</td><td class="crd-td">916</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">4,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Entabeni</strong></td><td class="crd-td">ZAF: -28,47, 30,23</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">4,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mnamfu</strong></td><td class="crd-td">ZAF: -30,52, 30,59</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Mabedlane</strong></td><td class="crd-td">ZAF: -29,7, 30,76</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mbodla</strong></td><td class="crd-td">ZAF: -27,05, 32,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Oyengweni</strong></td><td class="crd-td">ZAF: -28,58, 31,87</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1812)</td></tr>
<tr><td class="crd-td"><strong>eSiklebheni</strong></td><td class="crd-td">ZAF: -28,43, 31,32</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1878)</td></tr>
<tr><td class="crd-td"><strong>eMzinoni</strong></td><td class="crd-td">ZAF: -26,5, 29,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mbekelweni</strong></td><td class="crd-td">SWZ: -26,43, 31,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,3k (1885)</td></tr>
<tr><td class="crd-td"><strong>Shiselweni</strong></td><td class="crd-td">SWZ: -27,05, 31,4</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1815)</td></tr>
<tr><td class="crd-td"><strong>Umbumbulu</strong></td><td class="crd-td">ZAF: -30,13, 30,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Cele</strong></td><td class="crd-td">ZAF: -30,24, 30,73</td><td class="crd-td">457</td><td class="crd-td">629</td><td class="crd-td">934</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Border Cave</strong></td><td class="crd-td">ZAF: -27,02, 31,99</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1800)</td></tr>
<tr><td class="crd-td"><strong>Mafutseni</strong></td><td class="crd-td">SWZ: -26,52, 31,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mgede Shelter</strong></td><td class="crd-td">ZAF: -28,17, 29,69</td><td class="crd-td">2,9k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700)</td></tr>
<tr><td class="crd-td"><strong>Nqabeni</strong></td><td class="crd-td">ZAF: -28,32, 30,87</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1889)</td></tr>
<tr><td class="crd-td"><strong>Wembezi</strong></td><td class="crd-td">ZAF: -29,05, 29,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Madonela</strong></td><td class="crd-td">ZAF: -27,19, 32,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Watersmeet</strong></td><td class="crd-td">ZAF: -28,42, 29,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kotha’s Field</strong></td><td class="crd-td">SWZ: -26,68, 31,49</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1869)</td></tr>
<tr><td class="crd-td"><strong>Ntshekane</strong></td><td class="crd-td">ZAF: -28,98, 30,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1658)</td></tr>
<tr><td class="crd-td"><strong>iNkolimahashi Shelter</strong></td><td class="crd-td">ZAF: -28,79, 30,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1586)</td></tr>
<tr><td class="crd-td"><strong>Intaphuka</strong></td><td class="crd-td">ZAF: -29,52, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Hluhluwe</strong></td><td class="crd-td">ZAF: -28,02, 32,27</td><td class="crd-td">2,2k</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>... plus 154 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Zulu Kingdom and Colony of Natal (1500AD to 1902AD) (top 40 of 194 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Transvaal (ZAR), Pedi and Swazi Kingdom

Table \ref{tab:sub-transvaal} records 351 settlements across the Transvaal Highveld, Limpopo valley and southern Mozambique littoral, spanning early Tswana mega-towns (Kaditshwene at 18,4k, Molokwane at 13,4k, Marothodi at 5,85k), Pedi and Gaza capitals (Tshate at 7,45k, Vila de Mandlakazi at 14,5k) and late nineteenth-century gold and republican centres led by Johannesburg (102,1k), Pretoria (33k) and Barberton (6,8k) [@Gulbrandsen1993TheRise; @SAHRIS2024SouthAfrica].

<figure class="crd-table-figure" id="tab:sub-transvaal">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Johannesburg</strong></td><td class="crd-td">ZAF: -26,06, 28,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26k</td><td class="crd-td">102,1k (1896)</td></tr>
<tr><td class="crd-td"><strong>Kempton Park</strong></td><td class="crd-td">ZAF: -26,11, 28,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Pretoria</strong></td><td class="crd-td">ZAF: -25,74, 28,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">11,8k</td><td class="crd-td">33k (1900)</td></tr>
<tr><td class="crd-td"><strong>Alexandra</strong></td><td class="crd-td">ZAF: -26,11, 28,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kaditshwene</strong></td><td class="crd-td">ZAF: -25,35, 26,15</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Molokwane</strong></td><td class="crd-td">ZAF: -25,63, 27,17</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k (1820)</td></tr>
<tr><td class="crd-td"><strong>Saulsville</strong></td><td class="crd-td">ZAF: -25,78, 28,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1900)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">12,3k</td><td class="crd-td">9k</td><td class="crd-td">14,5k (1885)</td></tr>
<tr><td class="crd-td"><strong>Thembisile</strong></td><td class="crd-td">ZAF: -25,4, 28,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Bohlabela</strong></td><td class="crd-td">ZAF: -24,95, 31,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Dwarsloop</strong></td><td class="crd-td">ZAF: -24,79, 31,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,6k</td><td class="crd-td">6,7k</td><td class="crd-td">10,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>Bushbuckridge</strong></td><td class="crd-td">ZAF: -24,62, 31,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Tweefontein</strong></td><td class="crd-td">ZAF: -25,35, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Etwatwa</strong></td><td class="crd-td">ZAF: -26,11, 28,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Tshate</strong></td><td class="crd-td">ZAF: -24,66, 30,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">9,1k (1879)</td></tr>
<tr><td class="crd-td"><strong>Hammanskraal</strong></td><td class="crd-td">ZAF: -25,41, 28,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">8,6k</td><td class="crd-td">8,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Modjadji</strong></td><td class="crd-td">ZAF: -23,64, 30,23</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">5,1k</td><td class="crd-td">7,4k</td><td class="crd-td">8,7k</td><td class="crd-td">8,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Mosega</strong></td><td class="crd-td">ZAF: -25,64, 26,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1835)</td></tr>
<tr><td class="crd-td"><strong>Moruleng</strong></td><td class="crd-td">ZAF: -25,17, 27,17</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td><td class="crd-td">5k</td><td class="crd-td">8,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Siboshwa</strong></td><td class="crd-td">ZAF: -25,68, 31,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Tafelkop</strong></td><td class="crd-td">ZAF: -25,04, 29,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>Letlhabile</strong></td><td class="crd-td">ZAF: -25,48, 27,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Marothodi</strong></td><td class="crd-td">ZAF: -25,32, 26,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1822)</td></tr>
<tr><td class="crd-td"><strong>Moxomatsi</strong></td><td class="crd-td">ZAF: -25,86, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k (1540)</td></tr>
<tr><td class="crd-td"><strong>White River Central</strong></td><td class="crd-td">ZAF: -25,35, 30,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Roodepoort</strong></td><td class="crd-td">ZAF: -26,16, 27,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1896)</td></tr>
<tr><td class="crd-td"><strong>Barberton</strong></td><td class="crd-td">ZAF: -25,78, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k (1887)</td></tr>
<tr><td class="crd-td"><strong>The Orchards</strong></td><td class="crd-td">ZAF: -25,65, 28,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Germiston</strong></td><td class="crd-td">ZAF: -26,22, 28,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1896)</td></tr>
<tr><td class="crd-td"><strong>Moxomatsi</strong></td><td class="crd-td">ZAF: -24,75, 30,18</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1815)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">781</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">4k</td><td class="crd-td">6,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Erholweni</strong></td><td class="crd-td">ZAF: -25,2, 29,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1882)</td></tr>
<tr><td class="crd-td"><strong>Marothodi</strong></td><td class="crd-td">ZAF: -25,43, 27,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>Meriting</strong></td><td class="crd-td">ZAF: -25,62, 27,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Mphakane</strong></td><td class="crd-td">ZAF: -23,48, 29,74</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">5,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Nhlazatshe</strong></td><td class="crd-td">ZAF: -26,05, 30,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kapain</strong></td><td class="crd-td">ZAF: -25,07, 26,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1837)</td></tr>
<tr><td class="crd-td"><strong>Ga-Masemola</strong></td><td class="crd-td">ZAF: -24,55, 29,64</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,2k</td><td class="crd-td">5,2k</td><td class="crd-td">5,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Phokeng</strong></td><td class="crd-td">ZAF: -25,57, 27,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">5,3k</td><td class="crd-td">5,3k (1890)</td></tr>
<tr><td class="crd-td"><strong>Lenasia</strong></td><td class="crd-td">ZAF: -26,33, 27,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>... plus 311 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Transvaal (ZAR), Pedi and Swazi Kingdom (1500AD to 1902AD) (top 40 of 351 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Tswana Chiefdoms and Bechuanaland

Table \ref{tab:sub-tswana} documents 78 settlements across Botswana, the Caprivi Strip and western Zambia, led by Shoshong (26,4k), Old Palapye (19,2k), Molepolole (15,8k), Kanye (14,6k) and Linyanti (7,25k) [@Gulbrandsen1993TheRise].

<figure class="crd-table-figure" id="tab:sub-tswana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Shoshong</strong></td><td class="crd-td">BWA: -23,04, 26,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">26,4k</td><td class="crd-td">-</td><td class="crd-td">26,4k (1875)</td></tr>
<tr><td class="crd-td"><strong>Molepolole</strong></td><td class="crd-td">BWA: -24,39, 25,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">20k</td><td class="crd-td">20k (1890)</td></tr>
<tr><td class="crd-td"><strong>Old Palapye</strong></td><td class="crd-td">BWA: -22,63, 27,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Palapye</strong></td><td class="crd-td">BWA: -22,54, 27,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17k</td><td class="crd-td">17,9k (1895)</td></tr>
<tr><td class="crd-td"><strong>Kanye</strong></td><td class="crd-td">BWA: -24,98, 25,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">13,5k</td><td class="crd-td">14k</td><td class="crd-td">14,6k (1885)</td></tr>
<tr><td class="crd-td"><strong>Mochudi</strong></td><td class="crd-td">BWA: -24,39, 26,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1880)</td></tr>
<tr><td class="crd-td"><strong>Marapong</strong></td><td class="crd-td">ZAF: -23,66, 27,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>Dithubaruba</strong></td><td class="crd-td">BWA: -24,47, 25,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1863)</td></tr>
<tr><td class="crd-td"><strong>Linyanti</strong></td><td class="crd-td">NAM: -18,07, 24,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1855)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1860)</td></tr>
<tr><td class="crd-td"><strong>Dithejwane</strong></td><td class="crd-td">BWA: -24,44, 25,41</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1820)</td></tr>
<tr><td class="crd-td"><strong>Toteng</strong></td><td class="crd-td">BWA: -20,37, 22,95</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1875)</td></tr>
<tr><td class="crd-td"><strong>Kgwakgwe</strong></td><td class="crd-td">BWA: -25,01, 25,31</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Tsau</strong></td><td class="crd-td">BWA: -20,16, 22,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kolobeng</strong></td><td class="crd-td">BWA: -24,67, 25,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850)</td></tr>
<tr><td class="crd-td"><strong>Modipe Hill 94,2</strong></td><td class="crd-td">ZAF: -24,66, 26,19</td><td class="crd-td">2,5k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1600)</td></tr>
<tr><td class="crd-td"><strong>Mwandi</strong></td><td class="crd-td">ZMB: -17,51, 24,8</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k (1901)</td></tr>
<tr><td class="crd-td"><strong>Letsibogo 106</strong></td><td class="crd-td">BWA: -21,84, 27,71</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1700)</td></tr>
<tr><td class="crd-td"><strong>Mmamabula</strong></td><td class="crd-td">BWA: -23,57, 27,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1652)</td></tr>
<tr><td class="crd-td"><strong>Sokwane</strong></td><td class="crd-td">BWA: -24,42, 25,64</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1780)</td></tr>
<tr><td class="crd-td"><strong>Basinghall</strong></td><td class="crd-td">BWA: -23,51, 27,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1600)</td></tr>
<tr><td class="crd-td"><strong>Rivungo</strong></td><td class="crd-td">AGO: -16,33, 22,04</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k (1850)</td></tr>
<tr><td class="crd-td"><strong>Moshupa</strong></td><td class="crd-td">BWA: -24,78, 25,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Lose</strong></td><td class="crd-td">BWA: -22,92, 26,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500)</td></tr>
<tr><td class="crd-td"><strong>Bukalo Scarp</strong></td><td class="crd-td">NAM: -17,88, 24,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1500)</td></tr>
<tr><td class="crd-td"><strong>Toutswemogala</strong></td><td class="crd-td">BWA: -22,23, 27,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1523)</td></tr>
<tr><td class="crd-td"><strong>Mbalala</strong></td><td class="crd-td">ZMB: -16,56, 26,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Modipe 93,2</strong></td><td class="crd-td">BWA: -24,65, 26,2</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1527)</td></tr>
<tr><td class="crd-td"><strong>Ratholo</strong></td><td class="crd-td">BWA: -22,73, 27,57</td><td class="crd-td">670</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850)</td></tr>
<tr><td class="crd-td"><strong>Bakenberg</strong></td><td class="crd-td">ZAF: -23,44, 28,08</td><td class="crd-td">-</td><td class="crd-td">472</td><td class="crd-td">723</td><td class="crd-td">911</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Kalamare</strong></td><td class="crd-td">BWA: -22,94, 26,57</td><td class="crd-td">547</td><td class="crd-td">833</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Kikiya Mutunda (QRS 31/64)</strong></td><td class="crd-td">NAM: -18,03, 24,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500)</td></tr>
<tr><td class="crd-td"><strong>Sehithwa</strong></td><td class="crd-td">BWA: -20,47, 22,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">988</td><td class="crd-td">-</td><td class="crd-td">1,1k (1880)</td></tr>
<tr><td class="crd-td"><strong>Shoshong Hills</strong></td><td class="crd-td">BWA: -22,98, 26,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950 (1540)</td></tr>
<tr><td class="crd-td"><strong>Pilikwe</strong></td><td class="crd-td">BWA: -22,8, 27,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">775</td><td class="crd-td">933</td><td class="crd-td">944 (1891)</td></tr>
<tr><td class="crd-td"><strong>Lusu Mutunda (QRS 31/43)</strong></td><td class="crd-td">NAM: -17,88, 24,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">934 (1500)</td></tr>
<tr><td class="crd-td"><strong>Nokaneng</strong></td><td class="crd-td">BWA: -19,66, 22,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">846</td><td class="crd-td">-</td><td class="crd-td">903 (1880)</td></tr>
<tr><td class="crd-td"><strong>Kazungula</strong></td><td class="crd-td">BWA: -17,8, 25,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">700</td><td class="crd-td">888 (1901)</td></tr>
<tr><td class="crd-td"><strong>Bumbusi</strong></td><td class="crd-td">ZWE: -18,52, 26,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">869 (1540)</td></tr>
<tr><td class="crd-td"><strong>Ndonde</strong></td><td class="crd-td">ZMB: -16,73, 27,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">842 (1500)</td></tr>
<tr><td class="crd-td"><strong>... plus 38 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Tswana Chiefdoms and Bechuanaland (1500AD to 1902AD) (top 40 of 78 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Rozvi Empire, Ndebele and Mashonaland

Table \ref{tab:sub-rozvi} compiles 250 settlements across Zimbabwe and central Mozambique, encompassing Great Zimbabwe, Khami (7,2k), Danamombe (6,35k), Sofala (10k), Massangano-Zambezi (11,2k), Mhlahlandlela (9,85k), Bulawayo (14,6k), Harare (5,12k) and Beira (4,22k) [@Pikirayi2001ZimbabweCulture; @Chirikure1820NewPathways; @NMMZ2022ZimbabweSites].

<figure class="crd-table-figure" id="tab:sub-rozvi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bulawayo</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">10k</td><td class="crd-td">14,6k (1885)</td></tr>
<tr><td class="crd-td"><strong>Massangano-Zambezi</strong></td><td class="crd-td">MOZ: -16,65, 33,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1875)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td><td class="crd-td">980</td><td class="crd-td">850</td><td class="crd-td">772</td><td class="crd-td">10k (1505)</td></tr>
<tr><td class="crd-td"><strong>Mhlahlandlela</strong></td><td class="crd-td">ZWE: -20,37, 28,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1860)</td></tr>
<tr><td class="crd-td"><strong>Old Bulawayo</strong></td><td class="crd-td">ZWE: -20,31, 28,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">9,8k (1878)</td></tr>
<tr><td class="crd-td"><strong>Khami</strong></td><td class="crd-td">ZWE: -20,16, 28,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1580)</td></tr>
<tr><td class="crd-td"><strong>Epworth</strong></td><td class="crd-td">ZWE: -17,89, 31,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Danamombe</strong></td><td class="crd-td">ZWE: -19,92, 29,33</td><td class="crd-td">5,2k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Massangano</strong></td><td class="crd-td">MOZ: -16,4, 33,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">5k (1867)</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Ziwa</strong></td><td class="crd-td">ZWE: -18,18, 32,73</td><td class="crd-td">4,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1750)</td></tr>
<tr><td class="crd-td"><strong>Zvipadze</strong></td><td class="crd-td">ZWE: -16,95, 31,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1600)</td></tr>
<tr><td class="crd-td"><strong>Beira</strong></td><td class="crd-td">MOZ: -19,84, 34,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Masvingo South</strong></td><td class="crd-td">ZWE: -20,09, 30,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Naletale</strong></td><td class="crd-td">ZWE: -19,88, 29,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1500)</td></tr>
<tr><td class="crd-td"><strong>Kasekete</strong></td><td class="crd-td">ZWE: -16,36, 30,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1500)</td></tr>
<tr><td class="crd-td"><strong>Bingaguru</strong></td><td class="crd-td">ZWE: -18,72, 32,69</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">3,1k</td><td class="crd-td">2,8k</td><td class="crd-td">3,5k (1850)</td></tr>
<tr><td class="crd-td"><strong>Manyanga</strong></td><td class="crd-td">ZWE: -19,55, 29,07</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1750)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1700)</td></tr>
<tr><td class="crd-td"><strong>Zumbo</strong></td><td class="crd-td">MOZ: -15,62, 30,44</td><td class="crd-td">-</td><td class="crd-td">904</td><td class="crd-td">814</td><td class="crd-td">3,1k</td><td class="crd-td">967</td><td class="crd-td">3,1k (1875)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1500)</td></tr>
<tr><td class="crd-td"><strong>Divinhe</strong></td><td class="crd-td">MOZ: -20,66, 34,87</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k (1880)</td></tr>
<tr><td class="crd-td"><strong>Chisvingo</strong></td><td class="crd-td">ZWE: -17,17, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1530)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k (1780)</td></tr>
<tr><td class="crd-td"><strong>Lal Bagh</strong></td><td class="crd-td">ZWE: -19,45, 29,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1900)</td></tr>
<tr><td class="crd-td"><strong>Majiri Ruins</strong></td><td class="crd-td">ZWE: -20,38, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1530)</td></tr>
<tr><td class="crd-td"><strong>Dombe</strong></td><td class="crd-td">MOZ: -19,97, 33,4</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Dambarare</strong></td><td class="crd-td">ZWE: -17,45, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1685)</td></tr>
<tr><td class="crd-td"><strong>Bosutswe</strong></td><td class="crd-td">BWA: -21,95, 26,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1586)</td></tr>
<tr><td class="crd-td"><strong>Vila de Catandica</strong></td><td class="crd-td">MOZ: -18,06, 33,18</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1890)</td></tr>
<tr><td class="crd-td"><strong>Chidima</strong></td><td class="crd-td">ZWE: -16,27, 31,71</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1800)</td></tr>
<tr><td class="crd-td"><strong>Tsindi</strong></td><td class="crd-td">ZWE: -18,1, 31,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1598)</td></tr>
<tr><td class="crd-td"><strong>Changara</strong></td><td class="crd-td">MOZ: -16,85, 33,24</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k (1900)</td></tr>
<tr><td class="crd-td"><strong>Masapa</strong></td><td class="crd-td">ZWE: -16,65, 31,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1630)</td></tr>
<tr><td class="crd-td"><strong>Sangano</strong></td><td class="crd-td">ZWE: -18,42, 32,16</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850)</td></tr>
<tr><td class="crd-td"><strong>Dangamvura</strong></td><td class="crd-td">ZWE: -19,06, 32,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Chidzurira</strong></td><td class="crd-td">ZWE: -20,4, 31,44</td><td class="crd-td">372</td><td class="crd-td">533</td><td class="crd-td">762</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k (1900)</td></tr>
<tr><td class="crd-td"><strong>Leopard's Kopje Main Kraal</strong></td><td class="crd-td">ZWE: -20,12, 28,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500)</td></tr>
<tr><td class="crd-td"><strong>Zinjanja</strong></td><td class="crd-td">ZWE: -19,86, 29,36</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1750)</td></tr>
<tr><td class="crd-td"><strong>Zhizo Hill</strong></td><td class="crd-td">ZWE: -20,18, 28,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500)</td></tr>
<tr><td class="crd-td"><strong>... plus 210 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Rozvi Empire, Ndebele and Mashonaland (1500AD to 1902AD) (top 40 of 250 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Namaqua and Herero Polities of SW Africa

Table \ref{tab:sub-namaqua} records 59 pastoral, mission and coastal centres in central and southern Namibia, led by Okahandja (5,15k), Windhoek (2,94k), Otjimbingwe (2,84k), Omaruru (2,68k) and Gibeon (2,38k) [@Roberts2016ClimateEnvironment].

<figure class="crd-table-figure" id="tab:sub-namaqua">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Okahandja</strong></td><td class="crd-td">NAM: -21,98, 16,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k (1890)</td></tr>
<tr><td class="crd-td"><strong>Windhoek</strong></td><td class="crd-td">NAM: -22,56, 17,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k (1855)</td></tr>
<tr><td class="crd-td"><strong>Otjimbingwe</strong></td><td class="crd-td">NAM: -22,35, 16,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1865)</td></tr>
<tr><td class="crd-td"><strong>Omaruru</strong></td><td class="crd-td">NAM: -21,42, 15,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k (1894)</td></tr>
<tr><td class="crd-td"><strong>Gibeon</strong></td><td class="crd-td">NAM: -25,12, 17,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k (1885)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">NAM: -23,31, 17,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1895)</td></tr>
<tr><td class="crd-td"><strong>Fackeltrager Shelter, Omandumba</strong></td><td class="crd-td">NAM: -21,57, 15,35</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1755)</td></tr>
<tr><td class="crd-td"><strong>Gobabis</strong></td><td class="crd-td">NAM: -22,44, 18,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k (1880)</td></tr>
<tr><td class="crd-td"><strong>Etemba Shelter</strong></td><td class="crd-td">NAM: -21,45, 15,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1534)</td></tr>
<tr><td class="crd-td"><strong>Berseba</strong></td><td class="crd-td">NAM: -26, 17,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k (1885)</td></tr>
<tr><td class="crd-td"><strong>Khorixas</strong></td><td class="crd-td">NAM: -20,38, 14,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Lehututu</strong></td><td class="crd-td">BWA: -23,91, 21,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1885)</td></tr>
<tr><td class="crd-td"><strong>Swakopmund</strong></td><td class="crd-td">NAM: -22,66, 14,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Bethanie</strong></td><td class="crd-td">NAM: -26,5, 17,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k (1855)</td></tr>
<tr><td class="crd-td"><strong>Hoachanas</strong></td><td class="crd-td">NAM: -23,92, 18,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1895)</td></tr>
<tr><td class="crd-td"><strong>Keetmanshoop</strong></td><td class="crd-td">NAM: -26,58, 18,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">1k</td><td class="crd-td">1,1k (1895)</td></tr>
<tr><td class="crd-td"><strong>Gross Barmen</strong></td><td class="crd-td">NAM: -22,11, 16,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">679</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1880)</td></tr>
<tr><td class="crd-td"><strong>Drierivier Smelting Site</strong></td><td class="crd-td">NAM: -23,36, 17,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">982 (1500)</td></tr>
<tr><td class="crd-td"><strong>Okombahe</strong></td><td class="crd-td">NAM: -21,36, 15,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">907</td><td class="crd-td">907 (1890)</td></tr>
<tr><td class="crd-td"><strong>Pockenbank</strong></td><td class="crd-td">NAM: -27,22, 16,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">882 (1576)</td></tr>
<tr><td class="crd-td"><strong>Walvis Bay</strong></td><td class="crd-td">NAM: -22,95, 14,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">744</td><td class="crd-td">768 (1891)</td></tr>
<tr><td class="crd-td"><strong>Rietfontein Mier</strong></td><td class="crd-td">ZAF: -26,74, 20,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">508</td><td class="crd-td">747</td><td class="crd-td">763 (1891)</td></tr>
<tr><td class="crd-td"><strong>Otjosazu</strong></td><td class="crd-td">NAM: -22,02, 17,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465</td><td class="crd-td">753</td><td class="crd-td">753 (1890)</td></tr>
<tr><td class="crd-td"><strong>Cha-re Shelter</strong></td><td class="crd-td">NAM: -23,65, 15,92</td><td class="crd-td">742</td><td class="crd-td">742</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">742 (1600)</td></tr>
<tr><td class="crd-td"><strong>Tsisab Schlucht</strong></td><td class="crd-td">NAM: -21,1, 14,68</td><td class="crd-td">678</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">733 (1600)</td></tr>
<tr><td class="crd-td"><strong>Karamba</strong></td><td class="crd-td">NAM: -21,95, 18,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">722 (1500)</td></tr>
<tr><td class="crd-td"><strong>Lüderitz</strong></td><td class="crd-td">NAM: -26,64, 15,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">680 (1895)</td></tr>
<tr><td class="crd-td"><strong>Hardap Dam Mariental</strong></td><td class="crd-td">NAM: -24,5, 17,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">647 (1500)</td></tr>
<tr><td class="crd-td"><strong>Fransfontein</strong></td><td class="crd-td">NAM: -20,21, 15,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">609 (1900)</td></tr>
<tr><td class="crd-td"><strong>Neuhof-Kowas</strong></td><td class="crd-td">NAM: -23, 18,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">607 (1500)</td></tr>
<tr><td class="crd-td"><strong>Aminuis</strong></td><td class="crd-td">NAM: -23,65, 19,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">602 (1900)</td></tr>
<tr><td class="crd-td"><strong>Lokgwabe</strong></td><td class="crd-td">BWA: -24,09, 21,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">500</td><td class="crd-td">588</td><td class="crd-td">594 (1891)</td></tr>
<tr><td class="crd-td"><strong>Ring Structures</strong></td><td class="crd-td">NAM: -21,09, 13,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">504 (1500)</td></tr>
<tr><td class="crd-td"><strong>Sandwich Harbour</strong></td><td class="crd-td">NAM: -23,35, 14,49</td><td class="crd-td">-</td><td class="crd-td">184</td><td class="crd-td">344</td><td class="crd-td">430</td><td class="crd-td">294</td><td class="crd-td">447 (1880)</td></tr>
<tr><td class="crd-td"><strong>Geduld</strong></td><td class="crd-td">NAM: -20,28, 15,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">439 (1500)</td></tr>
<tr><td class="crd-td"><strong>Lower Numas Cave</strong></td><td class="crd-td">NAM: -21,12, 14,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">395 (1568)</td></tr>
<tr><td class="crd-td"><strong>Gorob River Mouth</strong></td><td class="crd-td">NAM: -23,67, 15,28</td><td class="crd-td">373</td><td class="crd-td">373</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">373 (1500)</td></tr>
<tr><td class="crd-td"><strong>Hasenbild, Twyfelfontein</strong></td><td class="crd-td">NAM: -20,58, 14,38</td><td class="crd-td">323</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">323 (1557)</td></tr>
<tr><td class="crd-td"><strong>Apollo 11 Cave</strong></td><td class="crd-td">NAM: -27,75, 17,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">314 (1627)</td></tr>
<tr><td class="crd-td"><strong>Tsootsha</strong></td><td class="crd-td">BWA: -22,12, 20,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310 (1895)</td></tr>
<tr><td class="crd-td"><strong>... plus 19 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Namaqua and Herero Polities of SW Africa (1500AD to 1902AD) (top 40 of 59 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Ovambo Kingdoms and Kavango Floodplains

Table \ref{tab:sub-ovambo} lists 43 royal and riverine centres across northern Namibia: Oshikango (7,6k), Ondangwa (6,35k), Okahao (3,45k), Rundu (2,15k) and Grootfontein (1,18k).

<figure class="crd-table-figure" id="tab:sub-ovambo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Oshikango</strong></td><td class="crd-td">NAM: -17,42, 15,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">7,3k</td><td class="crd-td">7,6k (1895)</td></tr>
<tr><td class="crd-td"><strong>Ondangwa</strong></td><td class="crd-td">NAM: -17,91, 15,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">1,9k</td><td class="crd-td">6,3k (1895)</td></tr>
<tr><td class="crd-td"><strong>Nancova</strong></td><td class="crd-td">AGO: -16,39, 18,99</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,3k</td><td class="crd-td">4,4k (1850)</td></tr>
<tr><td class="crd-td"><strong>Vila Pereira de Eça</strong></td><td class="crd-td">AGO: -17,08, 15,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1898)</td></tr>
<tr><td class="crd-td"><strong>Xangongo</strong></td><td class="crd-td">AGO: -16,75, 14,97</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1885)</td></tr>
<tr><td class="crd-td"><strong>Caiundo</strong></td><td class="crd-td">AGO: -15,7, 17,46</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">3,9k</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Okahao</strong></td><td class="crd-td">NAM: -17,89, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">1,4k</td><td class="crd-td">3,8k (1895)</td></tr>
<tr><td class="crd-td"><strong>Elim Namibia</strong></td><td class="crd-td">NAM: -17,73, 15,49</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1870)</td></tr>
<tr><td class="crd-td"><strong>Otchinjau</strong></td><td class="crd-td">AGO: -16,5, 13,92</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1850)</td></tr>
<tr><td class="crd-td"><strong>Rundu</strong></td><td class="crd-td">NAM: -17,93, 19,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Baía dos Tigres</strong></td><td class="crd-td">AGO: -16,6, 11,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k (1900)</td></tr>
<tr><td class="crd-td"><strong>Chiéde</strong></td><td class="crd-td">AGO: -17,17, 15,99</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Ombala yo Mungu</strong></td><td class="crd-td">AGO: -17,08, 15,13</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1900)</td></tr>
<tr><td class="crd-td"><strong>Oshakati</strong></td><td class="crd-td">NAM: -17,78, 15,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1895)</td></tr>
<tr><td class="crd-td"><strong>Masari</strong></td><td class="crd-td">NAM: -18,01, 20,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1500)</td></tr>
<tr><td class="crd-td"><strong>Andara</strong></td><td class="crd-td">NAM: -18,07, 21,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885)</td></tr>
<tr><td class="crd-td"><strong>Otjozondjupa</strong></td><td class="crd-td">NAM: -20,51, 17,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">834</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1890)</td></tr>
<tr><td class="crd-td"><strong>Chitado</strong></td><td class="crd-td">AGO: -17,31, 13,91</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1900)</td></tr>
<tr><td class="crd-td"><strong>Nyangana</strong></td><td class="crd-td">NAM: -17,98, 20,66</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850)</td></tr>
<tr><td class="crd-td"><strong>Olukonda</strong></td><td class="crd-td">NAM: -17,98, 16,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1885)</td></tr>
<tr><td class="crd-td"><strong>Shambyu</strong></td><td class="crd-td">NAM: -17,91, 20,03</td><td class="crd-td">-</td><td class="crd-td">996</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850)</td></tr>
<tr><td class="crd-td"><strong>Outapi</strong></td><td class="crd-td">NAM: -17,52, 15,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Namacunde</strong></td><td class="crd-td">AGO: -17,31, 15,84</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Cahama</strong></td><td class="crd-td">AGO: -16,27, 14,3</td><td class="crd-td">-</td><td class="crd-td">908</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">969</td><td class="crd-td">1,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Vungu Vungu</strong></td><td class="crd-td">NAM: -17,89, 19,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895 (1500)</td></tr>
<tr><td class="crd-td"><strong>Odangua</strong></td><td class="crd-td">NAM: -17,91, 16,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">868</td><td class="crd-td">868 (1890)</td></tr>
<tr><td class="crd-td"><strong>Ondangwa East</strong></td><td class="crd-td">NAM: -17,93, 16,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">822 (1900)</td></tr>
<tr><td class="crd-td"><strong>Oncócua</strong></td><td class="crd-td">AGO: -16,66, 13,42</td><td class="crd-td">-</td><td class="crd-td">649</td><td class="crd-td">723</td><td class="crd-td">694</td><td class="crd-td">677</td><td class="crd-td">723 (1850)</td></tr>
<tr><td class="crd-td"><strong>Grootfontein</strong></td><td class="crd-td">NAM: -19,58, 18,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620 (1895)</td></tr>
<tr><td class="crd-td"><strong>Namacunde/Oshikango [AGO]</strong></td><td class="crd-td">AGO: -17,38, 15,89</td><td class="crd-td">-</td><td class="crd-td">500</td><td class="crd-td">594</td><td class="crd-td">585</td><td class="crd-td">580</td><td class="crd-td">594 (1850)</td></tr>
<tr><td class="crd-td"><strong>Kapako</strong></td><td class="crd-td">NAM: -17,91, 19,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">548 (1500)</td></tr>
<tr><td class="crd-td"><strong>Omuthiya</strong></td><td class="crd-td">NAM: -18,36, 16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">348</td><td class="crd-td">355 (1900)</td></tr>
<tr><td class="crd-td"><strong>Okongo</strong></td><td class="crd-td">NAM: -17,57, 17,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">331 (1900)</td></tr>
<tr><td class="crd-td"><strong>Berorue</strong></td><td class="crd-td">AGO: -16,75, 12,33</td><td class="crd-td">237</td><td class="crd-td">234</td><td class="crd-td">218</td><td class="crd-td">211</td><td class="crd-td">207</td><td class="crd-td">237 (1659)</td></tr>
<tr><td class="crd-td"><strong>Ruacana</strong></td><td class="crd-td">NAM: -17,43, 14,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">208 (1900)</td></tr>
<tr><td class="crd-td"><strong>Namutoni</strong></td><td class="crd-td">NAM: -18,81, 16,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">183 (1900)</td></tr>
<tr><td class="crd-td"><strong>Okaukuejo</strong></td><td class="crd-td">NAM: -19,18, 15,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">163 (1900)</td></tr>
<tr><td class="crd-td"><strong>Eenhana</strong></td><td class="crd-td">NAM: -17,48, 16,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">155 (1900)</td></tr>
<tr><td class="crd-td"><strong>Divundu</strong></td><td class="crd-td">NAM: -18,09, 21,52</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">74</td><td class="crd-td">79</td><td class="crd-td">141 (1900)</td></tr>
<tr><td class="crd-td"><strong>Tsandi</strong></td><td class="crd-td">NAM: -17,74, 14,89</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">81</td><td class="crd-td">90</td><td class="crd-td">137 (1900)</td></tr>
<tr><td class="crd-td"><strong>Oshikuku</strong></td><td class="crd-td">NAM: -17,64, 15,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">116 (1900)</td></tr>
<tr><td class="crd-td"><strong>Okalongo</strong></td><td class="crd-td">NAM: -17,44, 15,33</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">72</td><td class="crd-td">96</td><td class="crd-td">110</td><td class="crd-td">110 (1890)</td></tr>
<tr><td class="crd-td"><strong>Onesi</strong></td><td class="crd-td">NAM: -17,59, 14,7</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65</td><td class="crd-td">65 (1650)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Ovambo Kingdoms and Kavango Floodplains (1500AD to 1902AD).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement gazetteer. First, 39 of the 1.567 settlements possess single-date entries, so benchmark columns outside their attested occupation display a hyphen (-). Second, Cape Town's 1850 synthesis outlier of 290k derives from regional Cape Colony urban compilations and contrasts with municipal headcounts of 21.840 in 1840 and 28.457 in 1865 [@Catalog1800StatisticalRegister; @Shell1994ChildrenBondage]. Third, gazetteer sums represent nucleated urban and royal settlements rather than full rural populations, which are reconstructed in the companion literature review.

# Conclusion

Together, the 1.567 individually assessed settlements trace four centuries of Southern African urbanisation across eight modern states, charting the transition from Rozvi stone citadels, Tswana *merafe* and Zulu *amakhanda* to the Cape-Natal ports and diamond-and-gold cities of 1902.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and linearly interpolated settlement totals across all ten historical sub-regions at six benchmark years between 1500AD and 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1875</th><th class="crd-th">1890</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western Cape and VOC-British Heartland (175)</strong></td><td class="crd-td">23k</td><td class="crd-td">26,6k</td><td class="crd-td">35,6k</td><td class="crd-td">329,9k</td><td class="crd-td">129,3k</td><td class="crd-td">192,5k</td></tr>
<tr><td class="crd-td"><strong>Eastern Cape Frontier, Xhosa and Transkei (198)</strong></td><td class="crd-td">14,2k</td><td class="crd-td">12,1k</td><td class="crd-td">22k</td><td class="crd-td">59,5k</td><td class="crd-td">132,4k</td><td class="crd-td">183k</td></tr>
<tr><td class="crd-td"><strong>Griqualand West, Karoo and Orange Frontier (66)</strong></td><td class="crd-td">6,9k</td><td class="crd-td">11,4k</td><td class="crd-td">8,7k</td><td class="crd-td">15,9k</td><td class="crd-td">21,3k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Orange Free State and Basutoland (153)</strong></td><td class="crd-td">18,5k</td><td class="crd-td">24,2k</td><td class="crd-td">26,3k</td><td class="crd-td">62,5k</td><td class="crd-td">107,7k</td><td class="crd-td">137,7k</td></tr>
<tr><td class="crd-td"><strong>Zulu Kingdom and Colony of Natal (194)</strong></td><td class="crd-td">24,3k</td><td class="crd-td">37,6k</td><td class="crd-td">56,8k</td><td class="crd-td">80,1k</td><td class="crd-td">119,7k</td><td class="crd-td">150,7k</td></tr>
<tr><td class="crd-td"><strong>Transvaal (ZAR), Pedi and Swazi Kingdom (351)</strong></td><td class="crd-td">125,1k</td><td class="crd-td">109,6k</td><td class="crd-td">144,6k</td><td class="crd-td">137k</td><td class="crd-td">207k</td><td class="crd-td">286,4k</td></tr>
<tr><td class="crd-td"><strong>Tswana Chiefdoms and Bechuanaland (78)</strong></td><td class="crd-td">21k</td><td class="crd-td">11,2k</td><td class="crd-td">24,8k</td><td class="crd-td">44,2k</td><td class="crd-td">68,8k</td><td class="crd-td">64,5k</td></tr>
<tr><td class="crd-td"><strong>Rozvi Empire, Ndebele and Mashonaland (250)</strong></td><td class="crd-td">148,8k</td><td class="crd-td">80,8k</td><td class="crd-td">97k</td><td class="crd-td">104,6k</td><td class="crd-td">108,6k</td><td class="crd-td">56,3k</td></tr>
<tr><td class="crd-td"><strong>Namaqua and Herero Polities of SW Africa (59)</strong></td><td class="crd-td">6,9k</td><td class="crd-td">4,4k</td><td class="crd-td">1,5k</td><td class="crd-td">8,9k</td><td class="crd-td">20,4k</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Ovambo Kingdoms and Kavango Floodplains (43)</strong></td><td class="crd-td">5,6k</td><td class="crd-td">5,7k</td><td class="crd-td">24,7k</td><td class="crd-td">29k</td><td class="crd-td">41,6k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (1.567)</strong></td><td class="crd-td">394,5k</td><td class="crd-td">323,6k</td><td class="crd-td">442k</td><td class="crd-td">871,6k</td><td class="crd-td">956,7k</td><td class="crd-td">1,16M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed site counts and combined interpolated populations across ten Southern African sub-regions (1500AD to 1890AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-abandonment benchmarks are left blank with a hyphen (-). Coordinates use European decimal commas in southern and eastern hemispheres (latitude, longitude).
