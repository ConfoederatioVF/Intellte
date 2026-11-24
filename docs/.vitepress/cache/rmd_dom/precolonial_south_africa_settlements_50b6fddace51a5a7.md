---
title: "Pre-Colonial Southern Africa and the Cape Frontier"
subtitle: "Settlement Gazetteer: 163 Individually Assessed Sites (1500AD-1902)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: precolonial_south_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 163 individually assessed settlements across eight Southern African countries spanning ten historical sub-regions from 1500AD to 1902AD."
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

This gazetteer compiles coordinates and multi-period population series for 163 individually assessed settlements across eight Southern African countries between 1500AD and 1902AD. Screened from 179 candidate towns, royal capitals, mission stations, Boer republic seats, stone-walled Tswana *merafe* and colonial ports (16 duplicate records excluded), the retained entries span ten historical sub-regions from the Western Cape to Matabeleland, Ovamboland and the lower Zambezi. Active interpolated sites grow from 4 in 1500AD to 9 in 1700AD, 20 in 1800AD, 45 in 1850AD, 85 in 1875 and 93 in 1890, tracing the shift from indigenous capitals such as Shoshong (26,4k), Kaditshwene (18,4k) and Dithakong (16,8k) to colonial ports and mining hubs led by Johannesburg (102,1k in 1896), Durban (68k in 1900), Cape Town (51,3k in 1891), Port Elizabeth (33k), Pretoria (33k) and Kimberley (28,7k).



# Background

Assembling a unified urban ledger for Southern Africa from 1500AD to 1902AD requires bridging distinct documentary and archaeological traditions. Along the Cape Colony and Natal littoral, Dutch VOC *opgaafrollen* and British municipal census returns provide regular headcounts for administrative towns and mission villages [@Shell1994ChildrenBondage; @Catalog1800StatisticalRegister; @Vink2019FromThe]. Across the interior plateaus of the Highveld, Bechuanaland, Zululand, Lesotho and Zimbabwe, urban scale is attested instead through nineteenth-century traveller itineraries, missionary journals and archaeological surveys of dry-stone compounds and royal *amakhanda* barracks [@Gulbrandsen1993TheRise; @Pikirayi2001ZimbabweCulture; @SAHRIS2024SouthAfrica; @NMMZ2022ZimbabweSites]. Uniting those sources under uniform spatial bounds exposes the demographic transition from pre-colonial Tswana and Rozvi agro-towns to late nineteenth-century mining and railway centres [@Barrow1801AccountTravels; @Smith1849IllustrationsThe].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate localities were compiled from colonial blue books, Cape archives, missionary station returns and regional archaeological registers [@Catalog1800StatisticalRegister; @SAHRIS2024SouthAfrica; @NMMZ2022ZimbabweSites]. Within the 3.360.053 km² study domain bounded over geoBoundaries outlines [@Runfola2020GeoBoundaries], 16 duplicate orthographies and overlapping historical records were merged, retaining 163 individually assessed settlements across 439 dated observations. Each settlement is assigned to one of ten historical sub-regions (161 within the 0,25-degree polygon mask plus Massangano-Zambezi and Manyikeni assigned to the neighbouring Rozvi-Mashonaland division).

## Site-Specific Population Estimation

All 163 entries record city-proper limits (163 city-proper, 0 metro) grounded in enumerated census returns, missionary residence tallies or mapped compound footprints [@LaCroix2016KhoikhoiPopulation; @ElphickGiliomee1989Shaping; @Deflem2022WarfarePolitical]. Tables 1 to 10 present linearly interpolated populations at five benchmark years (1700, 1800, 1850, 1875 and 1890) alongside each settlement's exact peak population and peak year, leaving pre-foundation and post-abandonment benchmarks marked by a hyphen (-).

# Testing and Validation

Across the 163 settlements, ordinary least-squares rank-size regression on the upper half (81 sites) produces a Zipf exponent of $q = 0,89$ ($R^2 = 0,98$; full-sample $q = 1,13$, $R^2 = 0,93$; Figure \ref{fig:settlements-rank}). Screening eliminates duplicate colonial and indigenous toponyms while preserving historical continuity across renamings such as Mangaung (Bloemfontein) and Ulundi (Ondini) [@Leanya2024ChurchAnd; @Deflem2022WarfarePolitical].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-precolonial-south-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 163 settlements (q = 0,89, R² = 0,98) and mean sub-regional density in 1900AD.</figcaption>
</figure>

# Results

## Western Cape and VOC-British Heartland

Table \ref{tab:sub-western-cape} records 18 settlements across the Western Cape, Boland and Namaqualand copper margin, tracing Cape Town, Stellenbosch, Paarl, Worcester, Oudtshoorn and Swellendam alongside early Khoikhoi polities at Cochoqua Kraal and Hessequa [@LaCroix2016KhoikhoiPopulation; @Guelke1976FrontierSettlement].

<figure class="crd-table-figure" id="tab:sub-western-cape">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cape Town</strong></td><td class="crd-td">ZAF: -33,98, 18,53</td><td class="crd-td">1,1k</td><td class="crd-td">15,7k</td><td class="crd-td">290k</td><td class="crd-td">33,2k</td><td class="crd-td">79k</td><td class="crd-td">290k (1850)</td></tr>
<tr><td class="crd-td"><strong>Paarl</strong></td><td class="crd-td">ZAF: -33,71, 18,96</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k</td><td class="crd-td">7,5k</td><td class="crd-td">7,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Worcester</strong></td><td class="crd-td">ZAF: -33,64, 19,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,8k</td><td class="crd-td">5,3k</td><td class="crd-td">5,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Oudtshoorn</strong></td><td class="crd-td">ZAF: -33,59, 22,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Stellenbosch</strong></td><td class="crd-td">ZAF: -33,93, 18,87</td><td class="crd-td">503</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k (1875)</td></tr>
<tr><td class="crd-td"><strong>Simon's Town</strong></td><td class="crd-td">ZAF: -34,19, 18,43</td><td class="crd-td">-</td><td class="crd-td">685</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,5k</td><td class="crd-td">3,6k (1891)</td></tr>
<tr><td class="crd-td"><strong>Cochoqua Kraal</strong></td><td class="crd-td">ZAF: -33,01, 18,07</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1652)</td></tr>
<tr><td class="crd-td"><strong>Beaufort West</strong></td><td class="crd-td">ZAF: -32,36, 22,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Hessequa</strong></td><td class="crd-td">ZAF: -34,09, 20,82</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1667)</td></tr>
<tr><td class="crd-td"><strong>Malmesbury</strong></td><td class="crd-td">ZAF: -33,46, 18,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>Genadendal</strong></td><td class="crd-td">ZAF: -34,04, 19,56</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k (1865)</td></tr>
<tr><td class="crd-td"><strong>Swellendam</strong></td><td class="crd-td">ZAF: -34,03, 20,44</td><td class="crd-td">-</td><td class="crd-td">657</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td><td class="crd-td">2k (1865)</td></tr>
<tr><td class="crd-td"><strong>Okiep</strong></td><td class="crd-td">ZAF: -29,59, 17,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Caledon</strong></td><td class="crd-td">ZAF: -34,24, 19,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Calvinia</strong></td><td class="crd-td">ZAF: -31,47, 19,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">722</td><td class="crd-td">786</td><td class="crd-td">790 (1891)</td></tr>
<tr><td class="crd-td"><strong>Clanwilliam</strong></td><td class="crd-td">ZAF: -32,18, 18,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">719</td><td class="crd-td">709</td><td class="crd-td">726 (1865)</td></tr>
<tr><td class="crd-td"><strong>Witzenville</strong></td><td class="crd-td">ZAF: -33,29, 19,15</td><td class="crd-td">-</td><td class="crd-td">558</td><td class="crd-td">612</td><td class="crd-td">629</td><td class="crd-td">638</td><td class="crd-td">639 (1891)</td></tr>
<tr><td class="crd-td"><strong>Springbok</strong></td><td class="crd-td">ZAF: -29,66, 17,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">570</td><td class="crd-td">580 (1891)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Western Cape and VOC-British Heartland (1500AD to 1902AD).</figcaption>
</figure>

## Eastern Cape Frontier, Xhosa and Transkei

Table \ref{tab:sub-eastern-cape} lists 22 settlements across the Eastern Cape, Karoo margin and Transkei, led by Port Elizabeth, Grahamstown, King Williams Town, East London and Graaff-Reinet [@Barrow1801AccountTravels; @Catalog1800StatisticalRegister].

<figure class="crd-table-figure" id="tab:sub-eastern-cape">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Elizabeth</strong></td><td class="crd-td">ZAF: -33,92, 25,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">13k</td><td class="crd-td">23k</td><td class="crd-td">33k (1900)</td></tr>
<tr><td class="crd-td"><strong>Grahamstown</strong></td><td class="crd-td">ZAF: -33,3, 26,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">6,9k</td><td class="crd-td">10,3k</td><td class="crd-td">10,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>King Williams Town</strong></td><td class="crd-td">ZAF: -32,9, 27,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">7,1k</td><td class="crd-td">7,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>East London</strong></td><td class="crd-td">ZAF: -32,98, 27,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k</td><td class="crd-td">6,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Graaff Reinet</strong></td><td class="crd-td">ZAF: -32,25, 24,53</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>Uitenhage</strong></td><td class="crd-td">ZAF: -33,76, 25,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,3k (1891)</td></tr>
<tr><td class="crd-td"><strong>Qaukeni</strong></td><td class="crd-td">ZAF: -31,37, 29,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,1k</td><td class="crd-td">3,9k</td><td class="crd-td">5,2k (1878)</td></tr>
<tr><td class="crd-td"><strong>Ntaba kaNdoda</strong></td><td class="crd-td">ZAF: -32,78, 27,15</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1817)</td></tr>
<tr><td class="crd-td"><strong>Cradock</strong></td><td class="crd-td">ZAF: -32,16, 25,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Queenstown</strong></td><td class="crd-td">ZAF: -31,9, 26,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4k</td><td class="crd-td">4,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Somerset East</strong></td><td class="crd-td">ZAF: -32,72, 25,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1891)</td></tr>
<tr><td class="crd-td"><strong>George</strong></td><td class="crd-td">ZAF: -33,98, 22,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Mossel Bay</strong></td><td class="crd-td">ZAF: -34,16, 22,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Kokstad</strong></td><td class="crd-td">ZAF: -30,54, 29,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Aliwal North</strong></td><td class="crd-td">ZAF: -30,69, 26,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Philippolis</strong></td><td class="crd-td">ZAF: -30,27, 25,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">998</td><td class="crd-td">960</td><td class="crd-td">1,9k (1850)</td></tr>
<tr><td class="crd-td"><strong>Colesberg</strong></td><td class="crd-td">ZAF: -30,72, 25,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1891)</td></tr>
<tr><td class="crd-td"><strong>Bethelsdorp</strong></td><td class="crd-td">ZAF: -33,89, 25,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">811</td><td class="crd-td">692</td><td class="crd-td">1,4k (1830)</td></tr>
<tr><td class="crd-td"><strong>Butterworth</strong></td><td class="crd-td">ZAF: -32,31, 28,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k (1830)</td></tr>
<tr><td class="crd-td"><strong>Umtata</strong></td><td class="crd-td">ZAF: -31,62, 28,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1891)</td></tr>
<tr><td class="crd-td"><strong>Fort Beaufort</strong></td><td class="crd-td">ZAF: -32,77, 26,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">1,1k (1865)</td></tr>
<tr><td class="crd-td"><strong>Knysna</strong></td><td class="crd-td">ZAF: -34,05, 23,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">729</td><td class="crd-td">937</td><td class="crd-td">951 (1891)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Eastern Cape Frontier, Xhosa and Transkei (1500AD to 1902AD).</figcaption>
</figure>

## Griqualand West, Karoo and Orange Frontier

Table \ref{tab:sub-griqualand} details 7 settlements across Griqualand West, the Orange River valley and the Northern Karoo, led by Dithakong (16,8k), Kuruman (8,4k) and Griekwastad (1,92k) [@Smith1849IllustrationsThe].

<figure class="crd-table-figure" id="tab:sub-griqualand">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dithakong</strong></td><td class="crd-td">ZAF: -27,08, 23,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,8k (1801)</td></tr>
<tr><td class="crd-td"><strong>Kuruman</strong></td><td class="crd-td">ZAF: -27,46, 23,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">8,4k (1824)</td></tr>
<tr><td class="crd-td"><strong>Griekwastad</strong></td><td class="crd-td">ZAF: -28,85, 23,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1,9k (1845)</td></tr>
<tr><td class="crd-td"><strong>Victoria West</strong></td><td class="crd-td">ZAF: -31,4, 23,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Warmbad</strong></td><td class="crd-td">NAM: -28,45, 18,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">920</td><td class="crd-td">1,1k (1850)</td></tr>
<tr><td class="crd-td"><strong>Upington</strong></td><td class="crd-td">ZAF: -28,45, 21,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Port Nolloth</strong></td><td class="crd-td">ZAF: -29,25, 16,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">835</td><td class="crd-td">855 (1891)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Griqualand West, Karoo and the Orange Frontier (1500AD to 1902AD).</figcaption>
</figure>

## Orange Free State and Basutoland

Table \ref{tab:sub-ofs} compiles 22 settlements across the Orange Free State, Lesotho and the Kimberley diamond borderland, anchored by Kimberley (28,7k), Taung (14,2k), Thaba Nchu (12,6k), Thaba Bosiu (8,92k) and Mangaung or Bloemfontein (3,38k) [@Leanya2024ChurchAnd; @Catalog1800StatisticalRegister].

<figure class="crd-table-figure" id="tab:sub-ofs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kimberley</strong></td><td class="crd-td">ZAF: -28,74, 24,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">28k</td><td class="crd-td">28,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Taung</strong></td><td class="crd-td">ZAF: -27,54, 24,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">14,2k</td><td class="crd-td">11,9k</td><td class="crd-td">14,2k (1875)</td></tr>
<tr><td class="crd-td"><strong>Thaba Nchu</strong></td><td class="crd-td">ZAF: -29,21, 26,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">12,2k</td><td class="crd-td">3,2k</td><td class="crd-td">12,6k (1880)</td></tr>
<tr><td class="crd-td"><strong>Thaba Bosiu</strong></td><td class="crd-td">LSO: -29,37, 27,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1848)</td></tr>
<tr><td class="crd-td"><strong>Mafikeng</strong></td><td class="crd-td">ZAF: -25,92, 25,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1891)</td></tr>
<tr><td class="crd-td"><strong>Klerksdorp</strong></td><td class="crd-td">ZAF: -26,86, 26,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1890)</td></tr>
<tr><td class="crd-td"><strong>Jagersfontein</strong></td><td class="crd-td">ZAF: -29,76, 25,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1890)</td></tr>
<tr><td class="crd-td"><strong>Mangaung</strong></td><td class="crd-td">ZAF: -29,12, 26,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">444</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1890)</td></tr>
<tr><td class="crd-td"><strong>Makgwareng</strong></td><td class="crd-td">ZAF: -28,48, 27,64</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1780)</td></tr>
<tr><td class="crd-td"><strong>Morija</strong></td><td class="crd-td">LSO: -29,63, 27,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1875)</td></tr>
<tr><td class="crd-td"><strong>Butha-Buthe</strong></td><td class="crd-td">LSO: -28,77, 28,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1822)</td></tr>
<tr><td class="crd-td"><strong>Harrismith</strong></td><td class="crd-td">ZAF: -28,27, 29,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1890)</td></tr>
<tr><td class="crd-td"><strong>Kroonstad</strong></td><td class="crd-td">ZAF: -27,66, 27,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1890)</td></tr>
<tr><td class="crd-td"><strong>Vryburg</strong></td><td class="crd-td">ZAF: -26,96, 24,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1891)</td></tr>
<tr><td class="crd-td"><strong>Winburg</strong></td><td class="crd-td">ZAF: -28,52, 27,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1890)</td></tr>
<tr><td class="crd-td"><strong>Bethlehem</strong></td><td class="crd-td">ZAF: -28,22, 28,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">956 (1890)</td></tr>
<tr><td class="crd-td"><strong>Maseru</strong></td><td class="crd-td">LSO: -29,35, 27,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">847</td><td class="crd-td">862 (1891)</td></tr>
<tr><td class="crd-td"><strong>Hlotse</strong></td><td class="crd-td">LSO: -28,86, 28,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">820 (1891)</td></tr>
<tr><td class="crd-td"><strong>Mohale's Hoek</strong></td><td class="crd-td">LSO: -30,14, 27,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">740 (1891)</td></tr>
<tr><td class="crd-td"><strong>Mafeteng</strong></td><td class="crd-td">LSO: -29,81, 27,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">685 (1891)</td></tr>
<tr><td class="crd-td"><strong>Quthing</strong></td><td class="crd-td">LSO: -30,4, 27,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (1891)</td></tr>
<tr><td class="crd-td"><strong>Teyateyaneng</strong></td><td class="crd-td">LSO: -29,16, 27,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">490 (1891)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Orange Free State and Basutoland (1500AD to 1902AD).</figcaption>
</figure>

## Zulu Kingdom and Colony of Natal

Table \ref{tab:sub-natal} presents 18 settlements across Natal, Zululand and eSwatini, contrasting colonial ports and towns (Durban at 68k, Pietermaritzburg at 17,5k) with Zulu and Swazi royal capitals at KwaBulawayo (9,24k), uMgungundlovu (8,64k), Ulundi or Ondini (6,48k), Nodwengu (5,42k) and Lobamba (5,15k) [@Deflem2022WarfarePolitical].

<figure class="crd-table-figure" id="tab:sub-natal">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Durban</strong></td><td class="crd-td">ZAF: -29,85, 31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">989</td><td class="crd-td">7,5k</td><td class="crd-td">18k</td><td class="crd-td">68k (1900)</td></tr>
<tr><td class="crd-td"><strong>Pietermaritzburg</strong></td><td class="crd-td">ZAF: -29,63, 30,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">8,8k</td><td class="crd-td">17k</td><td class="crd-td">17,5k (1891)</td></tr>
<tr><td class="crd-td"><strong>KwaBulawayo</strong></td><td class="crd-td">ZAF: -28,76, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k (1825)</td></tr>
<tr><td class="crd-td"><strong>uMgungundlovu</strong></td><td class="crd-td">ZAF: -28,43, 31,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1836)</td></tr>
<tr><td class="crd-td"><strong>Ulundi</strong></td><td class="crd-td">ZAF: -28,27, 31,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,5k (1878)</td></tr>
<tr><td class="crd-td"><strong>Stanger</strong></td><td class="crd-td">ZAF: -29,34, 31,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">1,7k</td><td class="crd-td">506</td><td class="crd-td">5,6k (1827)</td></tr>
<tr><td class="crd-td"><strong>Nodwengu</strong></td><td class="crd-td">ZAF: -28,32, 31,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1865)</td></tr>
<tr><td class="crd-td"><strong>Lobamba</strong></td><td class="crd-td">SWZ: -26,45, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td><td class="crd-td">5,2k (1894)</td></tr>
<tr><td class="crd-td"><strong>Oyengweni</strong></td><td class="crd-td">ZAF: -28,58, 31,87</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1812)</td></tr>
<tr><td class="crd-td"><strong>Ladysmith Central</strong></td><td class="crd-td">ZAF: -28,56, 29,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Lennoxton</strong></td><td class="crd-td">ZAF: -27,76, 29,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1891)</td></tr>
<tr><td class="crd-td"><strong>Bhekuzulu</strong></td><td class="crd-td">ZAF: -27,77, 30,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1890)</td></tr>
<tr><td class="crd-td"><strong>Standerton</strong></td><td class="crd-td">ZAF: -26,93, 29,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1890)</td></tr>
<tr><td class="crd-td"><strong>eSibongile</strong></td><td class="crd-td">ZAF: -28,17, 30,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1891)</td></tr>
<tr><td class="crd-td"><strong>Ermelo</strong></td><td class="crd-td">ZAF: -26,53, 29,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">960</td><td class="crd-td">960 (1890)</td></tr>
<tr><td class="crd-td"><strong>Manzini</strong></td><td class="crd-td">SWZ: -26,45, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">860 (1894)</td></tr>
<tr><td class="crd-td"><strong>Eshowe</strong></td><td class="crd-td">ZAF: -28,89, 31,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">685 (1891)</td></tr>
<tr><td class="crd-td"><strong>Mbabane</strong></td><td class="crd-td">SWZ: -26,36, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420 (1895)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Zulu Kingdom and Colony of Natal (1500AD to 1902AD).</figcaption>
</figure>

## Transvaal (ZAR), Pedi and Swazi Kingdom

Table \ref{tab:sub-transvaal} records 28 settlements across the Transvaal Highveld, Limpopo valley and southern Mozambique littoral, spanning early Tswana mega-towns (Kaditshwene at 18,4k, Molokwane at 13,4k, Marothodi at 5,85k), Pedi and Gaza capitals (Tshate at 7,45k, Vila de Mandlakazi at 14,5k) and late nineteenth-century gold and republican centres led by Johannesburg (102,1k), Pretoria (33k) and Barberton (6,8k) [@Gulbrandsen1993TheRise; @SAHRIS2024SouthAfrica].

<figure class="crd-table-figure" id="tab:sub-transvaal">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Johannesburg</strong></td><td class="crd-td">ZAF: -26,06, 28,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26k</td><td class="crd-td">102,1k (1896)</td></tr>
<tr><td class="crd-td"><strong>Pretoria</strong></td><td class="crd-td">ZAF: -25,74, 28,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">11,8k</td><td class="crd-td">33k (1900)</td></tr>
<tr><td class="crd-td"><strong>Kaditshwene</strong></td><td class="crd-td">ZAF: -25,35, 26,15</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">12,3k</td><td class="crd-td">9k</td><td class="crd-td">14,5k (1885)</td></tr>
<tr><td class="crd-td"><strong>Molokwane</strong></td><td class="crd-td">ZAF: -25,63, 27,17</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,4k (1810)</td></tr>
<tr><td class="crd-td"><strong>Mosega</strong></td><td class="crd-td">ZAF: -25,64, 26,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1835)</td></tr>
<tr><td class="crd-td"><strong>Tshate</strong></td><td class="crd-td">ZAF: -24,66, 30,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,4k (1876)</td></tr>
<tr><td class="crd-td"><strong>Barberton</strong></td><td class="crd-td">ZAF: -25,78, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k (1887)</td></tr>
<tr><td class="crd-td"><strong>Germiston</strong></td><td class="crd-td">ZAF: -26,22, 28,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1896)</td></tr>
<tr><td class="crd-td"><strong>Marothodi</strong></td><td class="crd-td">ZAF: -25,43, 27,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>Krugersdorp</strong></td><td class="crd-td">ZAF: -26,1, 27,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1896)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">708</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">4,2k</td><td class="crd-td">4,9k (1894)</td></tr>
<tr><td class="crd-td"><strong>Potchefstroom</strong></td><td class="crd-td">ZAF: -26,71, 27,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1890)</td></tr>
<tr><td class="crd-td"><strong>Boksburg</strong></td><td class="crd-td">ZAF: -26,21, 28,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1896)</td></tr>
<tr><td class="crd-td"><strong>Moxomatsi</strong></td><td class="crd-td">ZAF: -25,38, 30,35</td><td class="crd-td">3,8k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1760)</td></tr>
<tr><td class="crd-td"><strong>Ramotswa</strong></td><td class="crd-td">BWA: -24,87, 25,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1885)</td></tr>
<tr><td class="crd-td"><strong>Dzata</strong></td><td class="crd-td">ZAF: -22,88, 30,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1710)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,43, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1550)</td></tr>
<tr><td class="crd-td"><strong>Pilgrim's Rest</strong></td><td class="crd-td">ZAF: -24,91, 30,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k (1875)</td></tr>
<tr><td class="crd-td"><strong>Schoemansdal</strong></td><td class="crd-td">ZAF: -23,03, 29,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1864)</td></tr>
<tr><td class="crd-td"><strong>Pietersburg</strong></td><td class="crd-td">ZAF: -23,93, 29,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1890)</td></tr>
<tr><td class="crd-td"><strong>Heidelberg</strong></td><td class="crd-td">ZAF: -26,52, 28,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1890)</td></tr>
<tr><td class="crd-td"><strong>Middelburg</strong></td><td class="crd-td">ZAF: -25,78, 29,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1890)</td></tr>
<tr><td class="crd-td"><strong>Rustenburg</strong></td><td class="crd-td">ZAF: -25,64, 27,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1890)</td></tr>
<tr><td class="crd-td"><strong>Mashishing</strong></td><td class="crd-td">ZAF: -25,09, 30,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">860</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1890)</td></tr>
<tr><td class="crd-td"><strong>Zeerust</strong></td><td class="crd-td">ZAF: -25,54, 26,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">940</td><td class="crd-td">940 (1890)</td></tr>
<tr><td class="crd-td"><strong>Pigg's Peak</strong></td><td class="crd-td">SWZ: -25,96, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">680 (1890)</td></tr>
<tr><td class="crd-td"><strong>Mokopane</strong></td><td class="crd-td">ZAF: -24,19, 29,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">620 (1890)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Transvaal (ZAR), Pedi and Swazi Kingdom (1500AD to 1902AD).</figcaption>
</figure>

## Tswana Chiefdoms and Bechuanaland

Table \ref{tab:sub-tswana} documents 8 settlements across Botswana, the Caprivi Strip and western Zambia, led by Shoshong (26,4k), Old Palapye (19,2k), Molepolole (15,8k), Kanye (14,6k) and Linyanti (7,25k) [@Gulbrandsen1993TheRise].

<figure class="crd-table-figure" id="tab:sub-tswana">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Shoshong</strong></td><td class="crd-td">BWA: -23,04, 26,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">-</td><td class="crd-td">26,4k (1875)</td></tr>
<tr><td class="crd-td"><strong>Old Palapye</strong></td><td class="crd-td">BWA: -22,63, 27,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,2k (1892)</td></tr>
<tr><td class="crd-td"><strong>Molepolole</strong></td><td class="crd-td">BWA: -24,39, 25,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">-</td><td class="crd-td">15,8k (1880)</td></tr>
<tr><td class="crd-td"><strong>Kanye</strong></td><td class="crd-td">BWA: -24,98, 25,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">13,5k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1885)</td></tr>
<tr><td class="crd-td"><strong>Mochudi</strong></td><td class="crd-td">BWA: -24,39, 26,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1880)</td></tr>
<tr><td class="crd-td"><strong>Linyanti</strong></td><td class="crd-td">NAM: -18,07, 24,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1855)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1860)</td></tr>
<tr><td class="crd-td"><strong>Toteng</strong></td><td class="crd-td">BWA: -20,37, 22,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1875)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Tswana Chiefdoms and Bechuanaland (1500AD to 1902AD).</figcaption>
</figure>

## Rozvi Empire, Ndebele and Mashonaland

Table \ref{tab:sub-rozvi} compiles 22 settlements across Zimbabwe and central Mozambique, encompassing Great Zimbabwe, Khami (7,2k), Danamombe (6,35k), Sofala (10k), Massangano-Zambezi (11,2k), Mhlahlandlela (9,85k), Bulawayo (14,6k), Harare (5,12k) and Beira (4,22k) [@Pikirayi2001ZimbabweCulture; @Chirikure1820NewPathways; @NMMZ2022ZimbabweSites].

<figure class="crd-table-figure" id="tab:sub-rozvi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bulawayo</strong></td><td class="crd-td">ZWE: -20,17, 28,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">9,4k</td><td class="crd-td">14,6k (1885)</td></tr>
<tr><td class="crd-td"><strong>Massangano-Zambezi</strong></td><td class="crd-td">MOZ: -16,65, 33,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1875)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td><td class="crd-td">980</td><td class="crd-td">850</td><td class="crd-td">772</td><td class="crd-td">10k (1505)</td></tr>
<tr><td class="crd-td"><strong>Mhlahlandlela</strong></td><td class="crd-td">ZWE: -20,37, 28,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1860)</td></tr>
<tr><td class="crd-td"><strong>Khami</strong></td><td class="crd-td">ZWE: -20,16, 28,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1550)</td></tr>
<tr><td class="crd-td"><strong>Danamombe</strong></td><td class="crd-td">ZWE: -19,92, 29,33</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1780)</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ZWE: -17,88, 31,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1900)</td></tr>
<tr><td class="crd-td"><strong>Ziwa</strong></td><td class="crd-td">ZWE: -18,18, 32,73</td><td class="crd-td">4,5k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1750)</td></tr>
<tr><td class="crd-td"><strong>Beira</strong></td><td class="crd-td">MOZ: -19,84, 34,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1900)</td></tr>
<tr><td class="crd-td"><strong>Manyanga</strong></td><td class="crd-td">ZWE: -19,55, 29,07</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1750)</td></tr>
<tr><td class="crd-td"><strong>Zumbo</strong></td><td class="crd-td">MOZ: -15,62, 30,44</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,4k</td><td class="crd-td">3,1k</td><td class="crd-td">2k</td><td class="crd-td">3,1k (1875)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k (1780)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1500)</td></tr>
<tr><td class="crd-td"><strong>Dambarare</strong></td><td class="crd-td">ZWE: -17,45, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1685)</td></tr>
<tr><td class="crd-td"><strong>Masapa</strong></td><td class="crd-td">ZWE: -16,65, 31,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1630)</td></tr>
<tr><td class="crd-td"><strong>Bosutswe</strong></td><td class="crd-td">BWA: -21,95, 26,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1600)</td></tr>
<tr><td class="crd-td"><strong>Inyati</strong></td><td class="crd-td">ZWE: -19,68, 28,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1885)</td></tr>
<tr><td class="crd-td"><strong>Mutare</strong></td><td class="crd-td">ZWE: -18,98, 32,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1901)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1550)</td></tr>
<tr><td class="crd-td"><strong>Gweru</strong></td><td class="crd-td">ZWE: -19,46, 29,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1901)</td></tr>
<tr><td class="crd-td"><strong>Tsindi</strong></td><td class="crd-td">ZWE: -18,1, 31,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890 (1500)</td></tr>
<tr><td class="crd-td"><strong>Masvingo</strong></td><td class="crd-td">ZWE: -20,06, 30,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (1901)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Rozvi Empire, Ndebele and Mashonaland (1500AD to 1902AD).</figcaption>
</figure>

## Namaqua and Herero Polities of SW Africa

Table \ref{tab:sub-namaqua} records 13 pastoral, mission and coastal centres in central and southern Namibia, led by Okahandja (5,15k), Windhoek (2,94k), Otjimbingwe (2,84k), Omaruru (2,68k) and Gibeon (2,38k) [@Roberts2016ClimateEnvironment].

<figure class="crd-table-figure" id="tab:sub-namaqua">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Okahandja</strong></td><td class="crd-td">NAM: -21,98, 16,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5k</td><td class="crd-td">5,2k (1894)</td></tr>
<tr><td class="crd-td"><strong>Windhoek</strong></td><td class="crd-td">NAM: -22,56, 17,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2,9k (1855)</td></tr>
<tr><td class="crd-td"><strong>Otjimbingwe</strong></td><td class="crd-td">NAM: -22,35, 16,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1865)</td></tr>
<tr><td class="crd-td"><strong>Omaruru</strong></td><td class="crd-td">NAM: -21,42, 15,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k (1894)</td></tr>
<tr><td class="crd-td"><strong>Gibeon</strong></td><td class="crd-td">NAM: -25,12, 17,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k (1885)</td></tr>
<tr><td class="crd-td"><strong>Rehoboth</strong></td><td class="crd-td">NAM: -23,31, 17,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1895)</td></tr>
<tr><td class="crd-td"><strong>Gobabis</strong></td><td class="crd-td">NAM: -22,44, 18,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1880)</td></tr>
<tr><td class="crd-td"><strong>Berseba</strong></td><td class="crd-td">NAM: -26, 17,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1885)</td></tr>
<tr><td class="crd-td"><strong>Bethanie</strong></td><td class="crd-td">NAM: -26,5, 17,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k (1855)</td></tr>
<tr><td class="crd-td"><strong>Keetmanshoop</strong></td><td class="crd-td">NAM: -26,58, 18,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">1k</td><td class="crd-td">1,1k (1895)</td></tr>
<tr><td class="crd-td"><strong>Walvis Bay</strong></td><td class="crd-td">NAM: -22,95, 14,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">744</td><td class="crd-td">768 (1891)</td></tr>
<tr><td class="crd-td"><strong>Swakopmund</strong></td><td class="crd-td">NAM: -22,66, 14,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">740 (1898)</td></tr>
<tr><td class="crd-td"><strong>Lüderitz</strong></td><td class="crd-td">NAM: -26,64, 15,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">320 (1890)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Namaqua and Herero Polities of SW Africa (1500AD to 1902AD).</figcaption>
</figure>

## Ovambo Kingdoms and Kavango Floodplains

Table \ref{tab:sub-ovambo} lists 5 royal and riverine centres across northern Namibia: Oshikango (7,6k), Ondangwa (6,35k), Okahao (3,45k), Rundu (2,15k) and Grootfontein (1,18k).

<figure class="crd-table-figure" id="tab:sub-ovambo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1850</th><th class="crd-th">1875</th><th class="crd-th">1890</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Oshikango</strong></td><td class="crd-td">NAM: -17,42, 15,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">7,3k</td><td class="crd-td">7,6k (1895)</td></tr>
<tr><td class="crd-td"><strong>Ondangwa</strong></td><td class="crd-td">NAM: -17,91, 15,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,2k</td><td class="crd-td">6,3k (1895)</td></tr>
<tr><td class="crd-td"><strong>Okahao</strong></td><td class="crd-td">NAM: -17,89, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">3,8k (1895)</td></tr>
<tr><td class="crd-td"><strong>Rundu</strong></td><td class="crd-td">NAM: -17,93, 19,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1900)</td></tr>
<tr><td class="crd-td"><strong>Grootfontein</strong></td><td class="crd-td">NAM: -19,58, 18,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620 (1895)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Ovambo Kingdoms and Kavango Floodplains (1500AD to 1902AD).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement gazetteer. First, 39 of the 163 settlements possess single-date entries, so benchmark columns outside their attested occupation display a hyphen (-). Second, Cape Town's 1850 synthesis outlier of 290k derives from regional Cape Colony urban compilations and contrasts with municipal headcounts of 21.840 in 1840 and 28.457 in 1865 [@Catalog1800StatisticalRegister; @Shell1994ChildrenBondage]. Third, gazetteer sums represent nucleated urban and royal settlements rather than full rural populations, which are reconstructed in the companion literature review.

# Conclusion

Together, the 163 individually assessed settlements trace four centuries of Southern African urbanisation across eight modern states, charting the transition from Rozvi stone citadels, Tswana *merafe* and Zulu *amakhanda* to the Cape-Natal ports and diamond-and-gold cities of 1902.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and linearly interpolated settlement totals across all ten historical sub-regions at six benchmark years between 1500AD and 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1875</th><th class="crd-th">1890</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Western Cape and VOC-British Heartland (18)</strong></td><td class="crd-td">0</td><td class="crd-td">5,8k</td><td class="crd-td">22,5k</td><td class="crd-td">307,4k</td><td class="crd-td">63,9k</td><td class="crd-td">117,9k</td></tr>
<tr><td class="crd-td"><strong>Eastern Cape Frontier, Xhosa and Transkei (22)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">5,4k</td><td class="crd-td">25,2k</td><td class="crd-td">59,6k</td><td class="crd-td">88,2k</td></tr>
<tr><td class="crd-td"><strong>Griqualand West, Karoo and Orange Frontier (7)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">6,2k</td><td class="crd-td">6k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Orange Free State and Basutoland (22)</strong></td><td class="crd-td">0</td><td class="crd-td">1,8k</td><td class="crd-td">0</td><td class="crd-td">33,3k</td><td class="crd-td">52,7k</td><td class="crd-td">67k</td></tr>
<tr><td class="crd-td"><strong>Zulu Kingdom and Colony of Natal (18)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">2,7k</td><td class="crd-td">15,6k</td><td class="crd-td">28,8k</td><td class="crd-td">44,3k</td></tr>
<tr><td class="crd-td"><strong>Transvaal (ZAR), Pedi and Swazi Kingdom (28)</strong></td><td class="crd-td">0</td><td class="crd-td">3,8k</td><td class="crd-td">30,6k</td><td class="crd-td">9k</td><td class="crd-td">33,3k</td><td class="crd-td">70,4k</td></tr>
<tr><td class="crd-td"><strong>Tswana Chiefdoms and Bechuanaland (8)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">14,4k</td><td class="crd-td">62,6k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Rozvi Empire, Ndebele and Mashonaland (22)</strong></td><td class="crd-td">10,7k</td><td class="crd-td">8,9k</td><td class="crd-td">18,3k</td><td class="crd-td">12,4k</td><td class="crd-td">31,5k</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Namaqua and Herero Polities of SW Africa (13)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">7,8k</td><td class="crd-td">16,6k</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Ovambo Kingdoms and Kavango Floodplains (5)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">17,3k</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (163)</strong></td><td class="crd-td">10,7k</td><td class="crd-td">20,3k</td><td class="crd-td">79,6k</td><td class="crd-td">431,2k</td><td class="crd-td">372,4k</td><td class="crd-td">445k</td></tr>
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
