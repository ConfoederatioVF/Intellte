---
title: "Colonial Horn of Africa and Anglo-Egyptian Sudan"
subtitle: "Settlement Gazetteer: 1.452 Individually Assessed Sites (1880AD-1960AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_horn_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 1.452 individually assessed settlements across nine colonial and imperial sub-regions in the Horn of Africa and Anglo-Egyptian Sudan (1880AD to 1960AD)."
hero_label: "fig:hero-settlements-horn"

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

This gazetteer compiles coordinates and multi-date population series for 1.452 individually assessed settlements across eleven modern jurisdictions in the Horn of Africa and Anglo-Egyptian Sudan between 1880AD and 1960AD. Screened from 2.039 candidate towns, railway stations, colonial administrative posts and historic ports (587 duplicate aliases excluded), the retained entries span nine sub-regions across Imperial Ethiopia, Italian Eritrea, French and British Somaliland, Italian Somaliland and the nine Condominium provinces of Sudan. Active interpolated records expand from 86 settlements in 1880AD to 1.234 in 1910AD, 1.339 in 1930AD and 421 in 1950AD, led by Addis Ababa (541,7k agglomeration, 444k city proper), Khartoum (342,7k agglomeration), Omdurman (148k), Asmara (123,5k) and Mogadishu (101,5k).



# Background

Compiling an urban and small-town ledger across Northeast Africa between 1880AD and 1960AD requires integrating divergent archival traditions. Imperial Ethiopia lacked national censuses prior to 1984AD, leaving Addis Ababa, Harar, Dire Dawa, Gonder and Dese documented through traveller counts, Italian occupation municipal surveys and post-war statistical tallies [@Pankhurst1968EconomicHistory; @ARCCH2020EthiopiaInventory]. By contrast, Italian Eritrea produced systematic enumerations from 1905AD to 1939AD [@Fuller2011ItalyColonial], British and Italian Somalilands relied on port Blue Books and protectorate returns [@Omar2001ScrambleHorn; @Kuczynski1949DemographicSurvey2], and Anglo-Egyptian Sudan transitioned from early Condominium tax rolls to the 1955-1956 First Population Census [@Division1922HandbookThe; @Sudan1956Census].

# Methodology

## Candidate Screening and Sub-Regional Assignment

Of 2.039 candidate entries inside the 4.407.073 km² study domain bounded over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 587 duplicate transliteration aliases were removed, retaining 1.452 individually assessed settlements across 7.004 chronological observations. Each entry is assigned to one of the nine colonial or imperial sub-regions (237 inside the 5-arcminute interior raster plus Birao and Faza reconciled on the western Darfur and southern Somali margins).

## Scope Conventions and Linear Interpolation

The ledger distinguishes 232 city-proper municipal records from 7 post-1950 metropolitan agglomerations (Addis Ababa, Khartoum, Asmara, Mogadishu, Hargeisa, Djibouti and Juba) [@Demisse2024UrbanLand; @Darwich2025PortInfrastructures]. Tables 1 to 9 report linearly interpolated headcounts at five benchmarks (1880AD, 1910AD, 1930AD, 1950AD and 1960AD) alongside each entry's peak population and date, marking benchmarks outside an entry's observed span with a hyphen (-).

# Testing and Validation

Across all 1.452 retained settlements, upper-half Zipf regression (119 entries) yields $q = 1,07$ ($R^2 = 0,99$) and full-sample regression yields $q = 1,21$ ($R^2 = 0,96$), aligning closely with the 230 spatially deduplicated settlement peaks displayed in Figure \ref{fig:settlements-rank} ($q = 0,98$, $R^2 = 0,99$).

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-horn-sudan-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 230 spatially deduplicated settlements (q = 0,98, R² = 0,99) and mean sub-regional density in 1960AD.</figcaption>
</figure>

# Results

## Imperial Ethiopia: Northern and Central Highlands

Table \ref{tab:sub-eth-north} records 218 settlements across Shewa, Tigray, Begemder, Gojjam and Wollo, anchored by Addis Ababa (541,7k agglomeration, 444k city proper), Dese (46,9k), Gonder (22,8k), Entoto (18,5k), Mekele (15,3k), Debere Markos (15k) and Aksum (13k) [@Pankhurst1968EconomicHistory; @Sulas2014AksumWater].

<figure class="crd-table-figure" id="tab:sub-eth-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Addis Ababa (Agglomeration)</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">363,4k</td><td class="crd-td">541,7k</td><td class="crd-td">541,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">80k</td><td class="crd-td">400k</td><td class="crd-td">444k</td><td class="crd-td">444k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dese</strong></td><td class="crd-td">ETH: 11,16, 39,64</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">24,4k</td><td class="crd-td">46,9k</td><td class="crd-td">44,9k</td><td class="crd-td">46,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">ETH: 12,57, 37,46</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">11,4k</td><td class="crd-td">13,7k</td><td class="crd-td">22,8k</td><td class="crd-td">22,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Abiy Adi</strong></td><td class="crd-td">ETH: 13,56, 38,97</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Entoto</strong></td><td class="crd-td">ETH: 9,08, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Mekele</strong></td><td class="crd-td">ETH: 13,5, 39,47</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">10,3k</td><td class="crd-td">14,9k</td><td class="crd-td">15,3k</td><td class="crd-td">15,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Debere Markos</strong></td><td class="crd-td">ETH: 10,33, 37,74</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">9,2k</td><td class="crd-td">13,8k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">ETH: 14,12, 38,73</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">7,5k</td><td class="crd-td">11k</td><td class="crd-td">13k</td><td class="crd-td">13k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Adwa</strong></td><td class="crd-td">ETH: 14,18, 38,89</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">9,4k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">ETH: 11,86, 38</td><td class="crd-td">7,2k</td><td class="crd-td">4,9k</td><td class="crd-td">6,2k</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">9,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Birhan</strong></td><td class="crd-td">ETH: 9,68, 39,53</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,2k</td><td class="crd-td">8,3k</td><td class="crd-td">-</td><td class="crd-td">8,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Adigrat</strong></td><td class="crd-td">ETH: 14,3, 39,46</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Yenache</strong></td><td class="crd-td">ETH: 11,17, 37,6</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bahir Dar</strong></td><td class="crd-td">ETH: 11,58, 37,38</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kuy</strong></td><td class="crd-td">ETH: 10,49, 37,99</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Debirewerik</strong></td><td class="crd-td">ETH: 10,66, 38,16</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Brehan</strong></td><td class="crd-td">ETH: 9,66, 39,51</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Weldiya</strong></td><td class="crd-td">ETH: 11,82, 39,59</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Yejube</strong></td><td class="crd-td">ETH: 10,16, 37,75</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kombolcha</strong></td><td class="crd-td">ETH: 11,08, 39,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Liche</strong></td><td class="crd-td">ETH: 9,82, 39,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Ankober</strong></td><td class="crd-td">ETH: 9,59, 39,73</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Feta</strong></td><td class="crd-td">ETH: 10,79, 38,95</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bati</strong></td><td class="crd-td">ETH: 11,2, 40,01</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dangila</strong></td><td class="crd-td">ETH: 11,26, 36,85</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sela Dingay</strong></td><td class="crd-td">ETH: 9,95, 39,63</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bure</strong></td><td class="crd-td">ETH: 10,7, 37,08</td><td class="crd-td">2,5k</td><td class="crd-td">2,1k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mota</strong></td><td class="crd-td">ETH: 11,07, 37,88</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Wukro</strong></td><td class="crd-td">ETH: 13,79, 39,6</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shire Inda Silase</strong></td><td class="crd-td">ETH: 14,1, 38,28</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Wetet Abay</strong></td><td class="crd-td">ETH: 11,37, 37,04</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Sekota</strong></td><td class="crd-td">ETH: 12,63, 39,03</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Degolu</strong></td><td class="crd-td">ETH: 10,44, 39,26</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,7k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Addis Alem</strong></td><td class="crd-td">ETH: 9,03, 38,4</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Felege Birihan</strong></td><td class="crd-td">ETH: 10,75, 38,06</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Debark</strong></td><td class="crd-td">ETH: 13,13, 37,88</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bichena</strong></td><td class="crd-td">ETH: 10,44, 38,2</td><td class="crd-td">2,6k</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Azezo</strong></td><td class="crd-td">ETH: 12,5, 37,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Deresge</strong></td><td class="crd-td">ETH: 13,03, 38,18</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 178 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Imperial Ethiopia: Northern and Central Highlands (1880AD to 1960AD) (top 40 of 218 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Imperial Ethiopia: Oromo, Kaffa and Southwest

Table \ref{tab:sub-eth-south} lists 286 settlements across Oromia, Kaffa, Sidamo, Gemu Gofa, Illubabor and Gambela, led by Jima (22k), Adama (12,4k), Nekemte (10,8k), Asela (10,7k), Bishoftu (9,8k) and Gore (8,5k) [@Braukamper2013IndigenousViews].

<figure class="crd-table-figure" id="tab:sub-eth-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">ETH: 7,68, 36,84</td><td class="crd-td">11,8k</td><td class="crd-td">10,9k</td><td class="crd-td">16,5k</td><td class="crd-td">19,5k</td><td class="crd-td">18,9k</td><td class="crd-td">22k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Wenji Gefersa</strong></td><td class="crd-td">ETH: 8,45, 39,22</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">10,4k</td><td class="crd-td">15,8k</td><td class="crd-td">-</td><td class="crd-td">17,6k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Adama</strong></td><td class="crd-td">ETH: 8,51, 39,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Nekemte</strong></td><td class="crd-td">ETH: 9,09, 36,55</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">7,4k</td><td class="crd-td">11,3k</td><td class="crd-td">-</td><td class="crd-td">11,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mudula</strong></td><td class="crd-td">ETH: 7,27, 37,46</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">7k</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">11,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Fonko</strong></td><td class="crd-td">ETH: 7,64, 37,96</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,5k</td><td class="crd-td">9,5k</td><td class="crd-td">-</td><td class="crd-td">10,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Asela</strong></td><td class="crd-td">ETH: 7,96, 39,13</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">7,6k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kara Mile</strong></td><td class="crd-td">ETH: 9,36, 41,31</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">5,4k</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">10,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sodo</strong></td><td class="crd-td">ETH: 7,11, 37,63</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Bishoftu</strong></td><td class="crd-td">ETH: 8,75, 38,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">9,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">ETH: 6,74, 38,41</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,3k</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">9,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lera</strong></td><td class="crd-td">ETH: 7,75, 37,89</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">8,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Gore</strong></td><td class="crd-td">ETH: 8,15, 35,53</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">8k</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">8,5k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Meraro</strong></td><td class="crd-td">ETH: 7,41, 39,25</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Shashemene</strong></td><td class="crd-td">ETH: 7,21, 38,6</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">8,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kedida Gubeta</strong></td><td class="crd-td">ETH: 6,02, 38,26</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">8,1k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Dila</strong></td><td class="crd-td">ETH: 6,42, 38,32</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,5k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Alkeso</strong></td><td class="crd-td">ETH: 7,92, 38,24</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">7,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Ambo</strong></td><td class="crd-td">ETH: 8,96, 37,75</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Agaro</strong></td><td class="crd-td">ETH: 7,84, 36,58</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">7,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Muger</strong></td><td class="crd-td">ETH: 9,45, 38,34</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">7,5k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Hamibiso</strong></td><td class="crd-td">ETH: 9,81, 38,63</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Goba</strong></td><td class="crd-td">ETH: 7,01, 39,97</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Fiche</strong></td><td class="crd-td">ETH: 9,77, 38,74</td><td class="crd-td">3,3k</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bole</strong></td><td class="crd-td">ETH: 8,65, 39,75</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,6k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Egu Abey</strong></td><td class="crd-td">ETH: 5,7, 38,48</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">3,6k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Hosaena</strong></td><td class="crd-td">ETH: 7,63, 37,79</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shīrē</strong></td><td class="crd-td">ETH: 7,23, 38,98</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Weliso</strong></td><td class="crd-td">ETH: 8,55, 37,97</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mugo Tarara</strong></td><td class="crd-td">ETH: 7,86, 38</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Karat</strong></td><td class="crd-td">ETH: 5,34, 37,44</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">4,7k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Bona</strong></td><td class="crd-td">ETH: 6,53, 38,71</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Negele</strong></td><td class="crd-td">ETH: 5,33, 39,58</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,7k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dembi Dolo</strong></td><td class="crd-td">ETH: 8,54, 34,8</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">ETH: 7,28, 36,23</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Jinka</strong></td><td class="crd-td">ETH: 5,77, 36,57</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gimbi</strong></td><td class="crd-td">ETH: 9,17, 35,83</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Chiro</strong></td><td class="crd-td">ETH: 9,09, 40,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Robe</strong></td><td class="crd-td">ETH: 7,11, 40,01</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Meti</strong></td><td class="crd-td">ETH: 7,26, 35,33</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 246 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Imperial Ethiopia: Oromo, Kaffa and Southwest (1880AD to 1960AD) (top 40 of 286 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Imperial Ethiopia: Hararghe, Bale and Ogaden

Table \ref{tab:sub-eth-east} documents 53 settlements across Hararghe, the Ogaden lowlands and the Mandera border post, headed by Harar (45k), Dire Dawa (42,1k), the Africapolis Harare urban series (41,9k) and Jijiga (12,8k) [@Pankhurst1968EconomicHistory].

<figure class="crd-table-figure" id="tab:sub-eth-east">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Harar</strong></td><td class="crd-td">ETH: 9,31, 42,12</td><td class="crd-td">-</td><td class="crd-td">40k</td><td class="crd-td">41,6k</td><td class="crd-td">41,9k</td><td class="crd-td">-</td><td class="crd-td">45k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Dire Dawa</strong></td><td class="crd-td">ETH: 9,61, 41,85</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">18,3k</td><td class="crd-td">26,4k</td><td class="crd-td">42,1k</td><td class="crd-td">42,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ETH: 9,38, 42,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Jijiga</strong></td><td class="crd-td">ETH: 9,35, 42,8</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">7,6k</td><td class="crd-td">13,8k</td><td class="crd-td">-</td><td class="crd-td">14,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Girawa</strong></td><td class="crd-td">ETH: 9,12, 41,83</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bedeno</strong></td><td class="crd-td">ETH: 9,1, 41,68</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Melka Softu</strong></td><td class="crd-td">ETH: 3,97, 41,85</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,4k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lange</strong></td><td class="crd-td">ETH: 9,43, 41,79</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,5k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Degehabur</strong></td><td class="crd-td">ETH: 8,22, 43,56</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Burka</strong></td><td class="crd-td">ETH: 8,83, 41,58</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">5k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Kebri Dehar</strong></td><td class="crd-td">ETH: 6,74, 44,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kere</strong></td><td class="crd-td">ETH: 9,02, 42,13</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Hartisheik</strong></td><td class="crd-td">ETH: 9,16, 43,35</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kelafo</strong></td><td class="crd-td">ETH: 5,59, 44,2</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Lafey</strong></td><td class="crd-td">KEN: 3,15, 41,19</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Gara Muleta</strong></td><td class="crd-td">ETH: 9,08, 41,75</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Fik</strong></td><td class="crd-td">ETH: 8,14, 42,3</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bifitu Geda</strong></td><td class="crd-td">ETH: 9,45, 41,92</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Melka Rafa</strong></td><td class="crd-td">ETH: 9,46, 42,18</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Belet Xawo/Mandera [SOM]</strong></td><td class="crd-td">SOM: 3,93, 41,88</td><td class="crd-td">-</td><td class="crd-td">599</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sasabeneh</strong></td><td class="crd-td">ETH: 7,87, 43,67</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Misrak Imi</strong></td><td class="crd-td">ETH: 6,47, 42,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Haramaya</strong></td><td class="crd-td">ETH: 9,39, 42,01</td><td class="crd-td">-</td><td class="crd-td">663</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Midega</strong></td><td class="crd-td">ETH: 8,87, 42,12</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Were Mehamed</strong></td><td class="crd-td">ETH: 9,49, 42,18</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Kebri Beyah</strong></td><td class="crd-td">ETH: 9,1, 43,18</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gode</strong></td><td class="crd-td">ETH: 5,95, 43,55</td><td class="crd-td">-</td><td class="crd-td">613</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dolo</strong></td><td class="crd-td">ETH: 4,18, 42,06</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Deder</strong></td><td class="crd-td">ETH: 9,31, 41,44</td><td class="crd-td">-</td><td class="crd-td">608</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Korahe</strong></td><td class="crd-td">ETH: 6,83, 44,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1935AD)</td></tr>
<tr><td class="crd-td"><strong>Degah Medo</strong></td><td class="crd-td">ETH: 7,99, 43,02</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Mandera</strong></td><td class="crd-td">KEN: 3,94, 41,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Warder</strong></td><td class="crd-td">ETH: 6,97, 45,34</td><td class="crd-td">-</td><td class="crd-td">998</td><td class="crd-td">914</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dolow (north)</strong></td><td class="crd-td">SOM: 4,16, 42,09</td><td class="crd-td">-</td><td class="crd-td">461</td><td class="crd-td">747</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Qersa</strong></td><td class="crd-td">ETH: 9,45, 41,87</td><td class="crd-td">-</td><td class="crd-td">426</td><td class="crd-td">708</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kombolcha-Hararghe</strong></td><td class="crd-td">ETH: 9,43, 42,12</td><td class="crd-td">-</td><td class="crd-td">390</td><td class="crd-td">673</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Durwale</strong></td><td class="crd-td">ETH: 8,99, 43,12</td><td class="crd-td">-</td><td class="crd-td">903</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Chelenko</strong></td><td class="crd-td">ETH: 9,39, 41,6</td><td class="crd-td">-</td><td class="crd-td">435</td><td class="crd-td">685</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kulubi</strong></td><td class="crd-td">ETH: 9,43, 41,68</td><td class="crd-td">-</td><td class="crd-td">305</td><td class="crd-td">583</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Rhamu</strong></td><td class="crd-td">KEN: 3,93, 41,22</td><td class="crd-td">-</td><td class="crd-td">440</td><td class="crd-td">685</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 13 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Imperial Ethiopia: Hararghe, Bale and Ogaden (1880AD to 1960AD) (top 40 of 53 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Italian Eritrea and BMA Eritrea

Table \ref{tab:sub-eritrea} compiles 110 settlements across Colonia Eritrea and the post-1941AD British Military Administration, led by Asmara (123,5k agglomeration, 120,4k city proper), Massawa (17,2k), Keren (15k), Dek'emhāre (12,8k), Assab (10,4k) and Āk'ordat (10,3k) [@Fuller2011ItalyColonial; @Beyan2021UnemploymentAnd].

<figure class="crd-table-figure" id="tab:sub-eritrea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Asmara (Agglomeration)</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">99,3k</td><td class="crd-td">123,5k</td><td class="crd-td">123,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">20,9k</td><td class="crd-td">110,2k</td><td class="crd-td">-</td><td class="crd-td">120,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mits'iwa</strong></td><td class="crd-td">ERI: 15,62, 39,44</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">12,2k</td><td class="crd-td">15,1k</td><td class="crd-td">15,2k</td><td class="crd-td">21,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Keren</strong></td><td class="crd-td">ERI: 15,78, 38,45</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td><td class="crd-td">11k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dek'emhāre</strong></td><td class="crd-td">ERI: 15,07, 39,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">-</td><td class="crd-td">12,8k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Āseb</strong></td><td class="crd-td">ERI: 13,01, 42,74</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">9k</td><td class="crd-td">10,4k</td><td class="crd-td">10,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Āk'ordat</strong></td><td class="crd-td">ERI: 15,54, 37,88</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td><td class="crd-td">7,9k</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Ugrī</strong></td><td class="crd-td">ERI: 14,89, 38,81</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">9,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Shagarab al-Shamali</strong></td><td class="crd-td">SDN: 14,76, 35,98</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,3k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Gīnda</strong></td><td class="crd-td">ERI: 15,44, 39,1</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ali Ghdir</strong></td><td class="crd-td">ERI: 15,1, 36,58</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">4,2k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī K'eyih</strong></td><td class="crd-td">ERI: 14,85, 39,37</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Shagarab al-Awsatt</strong></td><td class="crd-td">SDN: 14,74, 35,97</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Barentu</strong></td><td class="crd-td">ERI: 15,11, 37,59</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sen'afē</strong></td><td class="crd-td">ERI: 14,7, 39,42</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Kwala</strong></td><td class="crd-td">ERI: 14,64, 38,83</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Teseney</strong></td><td class="crd-td">ERI: 15,1, 36,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Moncullo</strong></td><td class="crd-td">ERI: 15,61, 39,4</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Nak'fa</strong></td><td class="crd-td">ERI: 16,67, 38,48</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Jabal Qulsa</strong></td><td class="crd-td">SDN: 15,26, 36,49</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Segeneytī</strong></td><td class="crd-td">ERI: 15,05, 39,19</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Halai</strong></td><td class="crd-td">ERI: 15, 39,33</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Nefasit</strong></td><td class="crd-td">ERI: 15,32, 39,06</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Tsazega</strong></td><td class="crd-td">ERI: 15,35, 38,8</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Edd</strong></td><td class="crd-td">ERI: 13,93, 41,68</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Hazzega</strong></td><td class="crd-td">ERI: 15,37, 38,72</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Af Abeb</strong></td><td class="crd-td">ERI: 16,19, 38,69</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Mai-Mne</strong></td><td class="crd-td">ERI: 14,55, 38,5</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Oreine (island)</strong></td><td class="crd-td">ERI: 15,46, 39,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Digsa</strong></td><td class="crd-td">ERI: 14,99, 39,23</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Humera</strong></td><td class="crd-td">ETH: 14,28, 36,62</td><td class="crd-td">526</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ona Gabie</strong></td><td class="crd-td">ERI: 14,65, 38,87</td><td class="crd-td">-</td><td class="crd-td">433</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Jurna</strong></td><td class="crd-td">ERI: 14,95, 37,91</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>May Cadera</strong></td><td class="crd-td">ETH: 14,07, 36,57</td><td class="crd-td">-</td><td class="crd-td">783</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Serejeka</strong></td><td class="crd-td">ERI: 15,49, 38,86</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">DJI: 12,5, 42,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>Arkiko</strong></td><td class="crd-td">ERI: 15,54, 39,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1905AD)</td></tr>
<tr><td class="crd-td"><strong>Gundet</strong></td><td class="crd-td">ERI: 14,55, 38,76</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Hegaz</strong></td><td class="crd-td">ERI: 15,71, 38,26</td><td class="crd-td">751</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Debarwa</strong></td><td class="crd-td">ERI: 15,09, 38,84</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 70 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Italian Eritrea and BMA Eritrea (1880AD to 1960AD) (top 40 of 110 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## French Somaliland and British Somaliland

Table \ref{tab:sub-fr-br-som} presents 93 settlements across French Cote des Somalis and the British Somaliland Protectorate, anchored by Hargeisa (38,4k agglomeration, 34,3k city proper), Djibouti (37,4k agglomeration, 31,5k city proper), Berbera (18,1k), Burao (11,4k), Bulhar (7,2k) and Zeila (6k) [@Darwich2025PortInfrastructures; @Kuczynski1949DemographicSurvey2].

<figure class="crd-table-figure" id="tab:sub-fr-br-som">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">11,1k</td><td class="crd-td">21,4k</td><td class="crd-td">-</td><td class="crd-td">100k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Hargeisa (Agglomeration)</strong></td><td class="crd-td">SML: 9,56, 44,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,4k</td><td class="crd-td">38,4k</td><td class="crd-td">38,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Djibouti (Agglomeration)</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,9k</td><td class="crd-td">37,4k</td><td class="crd-td">37,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Hargeysa</strong></td><td class="crd-td">SML: 9,56, 44,05</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">14,5k</td><td class="crd-td">29k</td><td class="crd-td">-</td><td class="crd-td">34,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Barbara</strong></td><td class="crd-td">SML: 10,43, 45,01</td><td class="crd-td">-</td><td class="crd-td">13,4k</td><td class="crd-td">18,1k</td><td class="crd-td">16,2k</td><td class="crd-td">11,5k</td><td class="crd-td">30k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Burao</strong></td><td class="crd-td">SML: 9,52, 45,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">10,8k</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bulhar</strong></td><td class="crd-td">SML: 10,39, 44,41</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zeila</strong></td><td class="crd-td">SML: 11,35, 43,47</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k (1901AD)</td></tr>
<tr><td class="crd-td"><strong>Ali-Adeh</strong></td><td class="crd-td">DJI: 11,15, 42,85</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Borama</strong></td><td class="crd-td">SML: 9,94, 43,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Las Anod</strong></td><td class="crd-td">SML: 8,48, 47,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Baligubadle</strong></td><td class="crd-td">SML: 9, 44</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>'Erigavo</strong></td><td class="crd-td">SML: 10,62, 47,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Gabiley</strong></td><td class="crd-td">SML: 10,18, 45,56</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Lughaya</strong></td><td class="crd-td">SML: 10,69, 43,94</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sheikh</strong></td><td class="crd-td">SML: 9,93, 45,19</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Las Khorey</strong></td><td class="crd-td">SML: 11,16, 48,2</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Derwonaji</strong></td><td class="crd-td">ETH: 9,83, 43,03</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Oodweyne</strong></td><td class="crd-td">SML: 9,41, 45,06</td><td class="crd-td">263</td><td class="crd-td">512</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Tadjourah</strong></td><td class="crd-td">DJI: 11,79, 42,88</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Ali-Sabieh</strong></td><td class="crd-td">DJI: 11,15, 42,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Aynabo and Refugee Camp</strong></td><td class="crd-td">SML: 8,95, 46,41</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">721</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Baki</strong></td><td class="crd-td">SML: 9,89, 43,39</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Dikhil</strong></td><td class="crd-td">DJI: 11,11, 42,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Maydh</strong></td><td class="crd-td">SML: 11, 47,11</td><td class="crd-td">-</td><td class="crd-td">865</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Arta</strong></td><td class="crd-td">DJI: 11,52, 42,85</td><td class="crd-td">-</td><td class="crd-td">654</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Gebilay</strong></td><td class="crd-td">SML: 9,7, 43,62</td><td class="crd-td">-</td><td class="crd-td">639</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gaan Nibaah</strong></td><td class="crd-td">SML: 9,87, 44,8</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Buuhoodle</strong></td><td class="crd-td">SML: 8,24, 46,33</td><td class="crd-td">-</td><td class="crd-td">840</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Hahi</strong></td><td class="crd-td">SML: 9,35, 44,96</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Togo Chale</strong></td><td class="crd-td">ETH: 9,6, 43,34</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Obock</strong></td><td class="crd-td">DJI: 11,97, 43,29</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Qoorlugud</strong></td><td class="crd-td">SML: 8,55, 46,23</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Kalabaydh</strong></td><td class="crd-td">SML: 8,24, 47,23</td><td class="crd-td">-</td><td class="crd-td">969</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Xagal</strong></td><td class="crd-td">SML: 10,25, 45,74</td><td class="crd-td">-</td><td class="crd-td">633</td><td class="crd-td">992</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Faraweyne</strong></td><td class="crd-td">SML: 9,42, 43,79</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Yagoori</strong></td><td class="crd-td">SML: 8,75, 46,96</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Ali Adde</strong></td><td class="crd-td">DJI: 11,13, 42,89</td><td class="crd-td">-</td><td class="crd-td">599</td><td class="crd-td">891</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Holl-Holl</strong></td><td class="crd-td">DJI: 11,31, 42,93</td><td class="crd-td">-</td><td class="crd-td">731</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Garadag</strong></td><td class="crd-td">SML: 9,49, 46,87</td><td class="crd-td">-</td><td class="crd-td">573</td><td class="crd-td">862</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 53 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in French Somaliland and British Somaliland (1880AD to 1960AD) (top 40 of 93 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Italian Somaliland

Table \ref{tab:sub-it-som} details 119 settlements across Somalia Italiana and the UN Trusteeship Territory alongside border-margin Faza, led by Mogadishu (101,5k agglomeration, 63,3k city proper), Marka (61,6k), Qoryoley (15k), Afgoye (14,9k), Jowhar (14,5k), Kismaayo (11,3k) and Baidoa (11,2k) [@Omar2001ScrambleHorn].

<figure class="crd-table-figure" id="tab:sub-it-som">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mogadishu (Agglomeration)</strong></td><td class="crd-td">SOM: 2,12, 45,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,5k</td><td class="crd-td">101,5k</td><td class="crd-td">101,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">28,4k</td><td class="crd-td">67,3k</td><td class="crd-td">-</td><td class="crd-td">70k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">9,3k</td><td class="crd-td">61,6k</td><td class="crd-td">29,7k</td><td class="crd-td">61,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Qoryoley</strong></td><td class="crd-td">SOM: 1,79, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Afgoye</strong></td><td class="crd-td">SOM: 2,14, 45,12</td><td class="crd-td">7,4k</td><td class="crd-td">5,8k</td><td class="crd-td">6,9k</td><td class="crd-td">10k</td><td class="crd-td">14,9k</td><td class="crd-td">14,9k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Jowhar</strong></td><td class="crd-td">SOM: 2,78, 45,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">14,5k</td><td class="crd-td">13,8k</td><td class="crd-td">14,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Baidoa</strong></td><td class="crd-td">SOM: 3,12, 43,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">13k</td><td class="crd-td">10,6k</td><td class="crd-td">14,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kismaayo</strong></td><td class="crd-td">SOM: -0,35, 42,55</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">7,2k</td><td class="crd-td">12,2k</td><td class="crd-td">11,3k</td><td class="crd-td">13,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Beledweyne</strong></td><td class="crd-td">SOM: 4,74, 45,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">11,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Jamaame</strong></td><td class="crd-td">SOM: 0,07, 42,75</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,6k</td><td class="crd-td">7,5k</td><td class="crd-td">10,5k</td><td class="crd-td">10,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Eyl</strong></td><td class="crd-td">SOM: 7,98, 49,82</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Baar Dheere</strong></td><td class="crd-td">SOM: 2,34, 42,29</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">9,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">6k</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">9,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dhoobaale</strong></td><td class="crd-td">SOM: 0,41, 41,01</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">8,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kaambooni</strong></td><td class="crd-td">SOM: -1,64, 41,59</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Luuq</strong></td><td class="crd-td">SOM: 3,8, 42,54</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gaalkayo</strong></td><td class="crd-td">SOM: 6,78, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Janaale</strong></td><td class="crd-td">SOM: 1,81, 44,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bosaso</strong></td><td class="crd-td">SOM: 11,26, 49,19</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Jilib</strong></td><td class="crd-td">SOM: 0,49, 42,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Buur Hakaba</strong></td><td class="crd-td">SOM: 2,8, 44,08</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dinsoor</strong></td><td class="crd-td">SOM: 2,41, 42,97</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Qardho</strong></td><td class="crd-td">SOM: 9,51, 49,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Hobyo</strong></td><td class="crd-td">SOM: 5,35, 48,53</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Godinlabe</strong></td><td class="crd-td">SOM: 5,88, 46,63</td><td class="crd-td">-</td><td class="crd-td">906</td><td class="crd-td">1,2k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Hafun Settlement</strong></td><td class="crd-td">SOM: 10,42, 51,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Guri'eel</strong></td><td class="crd-td">SOM: 5,31, 45,88</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Garoowe</strong></td><td class="crd-td">SOM: 8,4, 48,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bal'ad</strong></td><td class="crd-td">SOM: 2,36, 45,38</td><td class="crd-td">876</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Alula</strong></td><td class="crd-td">SOM: 11,97, 50,76</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shalambod</strong></td><td class="crd-td">SOM: 1,71, 44,69</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Qandala</strong></td><td class="crd-td">SOM: 11,47, 49,87</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Xuddur</strong></td><td class="crd-td">SOM: 4,12, 43,89</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ceeldheer</strong></td><td class="crd-td">SOM: 3,85, 47,18</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Garbahaarey</strong></td><td class="crd-td">SOM: 3,33, 42,22</td><td class="crd-td">-</td><td class="crd-td">999</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bulobarde</strong></td><td class="crd-td">SOM: 3,85, 45,56</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Wanlaweyn</strong></td><td class="crd-td">SOM: 2,62, 44,89</td><td class="crd-td">692</td><td class="crd-td">1,9k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Awdiinle</strong></td><td class="crd-td">SOM: 3,17, 43,41</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bu'aale</strong></td><td class="crd-td">SOM: 1,08, 42,58</td><td class="crd-td">-</td><td class="crd-td">930</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 79 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in Italian Somaliland and UN Trusteeship Somalia (1880AD to 1960AD) (top 40 of 119 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Nile, Khartoum and Kassala

Table \ref{tab:sub-sdn-north} catalogues 228 settlements across Northern, Khartoum, Kassala and Blue Nile provinces, led by Khartoum (342,7k agglomeration, 124k city proper), Omdurman (148k), Port Sudan (62,7k), Wad Madanī (56,9k), Kassalā (50,7k) and Atbara (42k) [@Division1922HandbookThe; @Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khartoum (Agglomeration)</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">229,4k</td><td class="crd-td">342,7k</td><td class="crd-td">342,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">SDN: 15,64, 32,48</td><td class="crd-td">-</td><td class="crd-td">49k</td><td class="crd-td">103,7k</td><td class="crd-td">116,5k</td><td class="crd-td">-</td><td class="crd-td">148k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">50k</td><td class="crd-td">32k</td><td class="crd-td">50k</td><td class="crd-td">68k</td><td class="crd-td">124k</td><td class="crd-td">124k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">SDN: 15,45, 36,35</td><td class="crd-td">15,2k</td><td class="crd-td">13,4k</td><td class="crd-td">26,4k</td><td class="crd-td">35,7k</td><td class="crd-td">50,7k</td><td class="crd-td">72k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sūdān</strong></td><td class="crd-td">SDN: 19,6, 37,21</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">21,5k</td><td class="crd-td">39,3k</td><td class="crd-td">62,7k</td><td class="crd-td">62,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm Baḥrī</strong></td><td class="crd-td">SDN: 15,65, 32,53</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">20,1k</td><td class="crd-td">33,2k</td><td class="crd-td">-</td><td class="crd-td">62k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">33k</td><td class="crd-td">46k</td><td class="crd-td">56,9k</td><td class="crd-td">57,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Khalas</strong></td><td class="crd-td">SDN: 15,79, 32,38</td><td class="crd-td">-</td><td class="crd-td">24,8k</td><td class="crd-td">31,9k</td><td class="crd-td">47,8k</td><td class="crd-td">-</td><td class="crd-td">53,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">SDN: 14,39, 33,52</td><td class="crd-td">12,4k</td><td class="crd-td">14,6k</td><td class="crd-td">29,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,2k (1945AD)</td></tr>
<tr><td class="crd-td"><strong>'Aṭbarah</strong></td><td class="crd-td">SDN: 17,73, 33,99</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">19,8k</td><td class="crd-td">29k</td><td class="crd-td">42k</td><td class="crd-td">42k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kosty</strong></td><td class="crd-td">SDN: 13,15, 32,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">13,1k</td><td class="crd-td">18k</td><td class="crd-td">27,2k</td><td class="crd-td">27,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Sharifay</strong></td><td class="crd-td">SDN: 15,35, 36,46</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">13,8k</td><td class="crd-td">18,8k</td><td class="crd-td">-</td><td class="crd-td">26,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kūstī</strong></td><td class="crd-td">SDN: 13,16, 32,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">21k</td><td class="crd-td">-</td><td class="crd-td">22,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭawkar</strong></td><td class="crd-td">SDN: 18,42, 37,73</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">11,2k</td><td class="crd-td">15,2k</td><td class="crd-td">14,4k</td><td class="crd-td">16,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Barsi</strong></td><td class="crd-td">SDN: 14,44, 33,53</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">8,1k</td><td class="crd-td">11,3k</td><td class="crd-td">-</td><td class="crd-td">15,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duwaym</strong></td><td class="crd-td">SDN: 14, 32,3</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">8,8k</td><td class="crd-td">11,5k</td><td class="crd-td">14,3k</td><td class="crd-td">14,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">8,2k</td><td class="crd-td">4,8k</td><td class="crd-td">9,3k</td><td class="crd-td">12,4k</td><td class="crd-td">12,1k</td><td class="crd-td">14,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k</td><td class="crd-td">8,5k</td><td class="crd-td">12,4k</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>al-Jazira Aba</strong></td><td class="crd-td">SDN: 13,31, 32,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">SDN: 18,03, 33,99</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">8,8k</td><td class="crd-td">12,3k</td><td class="crd-td">11,9k</td><td class="crd-td">12,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sinjah</strong></td><td class="crd-td">SDN: 13,15, 33,93</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,5k</td><td class="crd-td">10,5k</td><td class="crd-td">12,1k</td><td class="crd-td">12,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">4,7k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">12k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Rufa</strong></td><td class="crd-td">SDN: 14,77, 33,36</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">8,5k</td><td class="crd-td">10,5k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wadi Halfa</strong></td><td class="crd-td">SDN: 21,8, 31,37</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">6,9k</td><td class="crd-td">11,1k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Soky</strong></td><td class="crd-td">SDN: 13,31, 33,9</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">7,2k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Jazīrah Abā</strong></td><td class="crd-td">SDN: 13,33, 32,62</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Sanwa</strong></td><td class="crd-td">SDN: 15,59, 32,29</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">5,1k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">10,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">5,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,2k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">10k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Wad al-Hilayu</strong></td><td class="crd-td">SDN: 14,24, 35,87</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">10k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Mayrnu</strong></td><td class="crd-td">SDN: 13,42, 33,66</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Qarya Ithnin'Arab</strong></td><td class="crd-td">SDN: 15,14, 35,58</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,4k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">9,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Mansura</strong></td><td class="crd-td">SDN: 14,59, 35,87</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,4k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">8,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Hasahisa</strong></td><td class="crd-td">SDN: 14,74, 33,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Marabiya' al-Sharif</strong></td><td class="crd-td">SDN: 15,52, 32,72</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k</td><td class="crd-td">-</td><td class="crd-td">8,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Madina al-Masna'a</strong></td><td class="crd-td">SDN: 15,47, 35,56</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,8k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Sifeay North</strong></td><td class="crd-td">SDN: 13,07, 32,88</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,8k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Rabak</strong></td><td class="crd-td">SDN: 13,19, 32,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>As-Sūkī</strong></td><td class="crd-td">SDN: 13,32, 33,88</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manāqil</strong></td><td class="crd-td">SDN: 14,24, 32,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 188 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Nile, Khartoum and Kassala (1880AD to 1960AD) (top 40 of 228 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Darfur and Kordofan

Table \ref{tab:sub-sdn-west} records 193 settlements across Darfur and Kordofan together with frontier posts at Adré and Birao, headed by Al-Ubayyiḍ (58,2k), Al-Fāshir (33,5k), Nyālā (18,8k), al-Nuhud (18,5k) and Al-Junaynah (15,6k) [@Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-west">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">28,4k</td><td class="crd-td">48,1k</td><td class="crd-td">58,2k</td><td class="crd-td">65,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">-</td><td class="crd-td">11,3k</td><td class="crd-td">14,8k</td><td class="crd-td">21,7k</td><td class="crd-td">33,5k</td><td class="crd-td">33,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Nyālā</strong></td><td class="crd-td">SDN: 12,06, 24,89</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">8,5k</td><td class="crd-td">13,4k</td><td class="crd-td">18,8k</td><td class="crd-td">18,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>al-Nuhud</strong></td><td class="crd-td">SDN: 12,69, 28,42</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">9,8k</td><td class="crd-td">14k</td><td class="crd-td">18,5k</td><td class="crd-td">18,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>An-Nuhūd</strong></td><td class="crd-td">SDN: 12,7, 28,43</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">11,5k</td><td class="crd-td">17,2k</td><td class="crd-td">-</td><td class="crd-td">17,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,3k</td><td class="crd-td">11,3k</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Zarafah</strong></td><td class="crd-td">SDN: 11,68, 25,71</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">9,2k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">15,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Tebeldina</strong></td><td class="crd-td">SDN: 12,66, 25,71</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">7,4k</td><td class="crd-td">8,2k</td><td class="crd-td">-</td><td class="crd-td">13,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kalma</strong></td><td class="crd-td">SDN: 12, 25,02</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">7,7k</td><td class="crd-td">10,9k</td><td class="crd-td">-</td><td class="crd-td">12,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Hashaba</strong></td><td class="crd-td">SDN: 11,95, 24,96</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,9k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">12k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Tiwaysha</strong></td><td class="crd-td">SDN: 12,3, 26,7</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">7,6k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">12k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>DIba Dunqula</strong></td><td class="crd-td">SDN: 13,49, 25,29</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">7,2k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">11,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Ad-Dillinj</strong></td><td class="crd-td">SDN: 11,95, 29,46</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,8k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">10,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Um Rowaba</strong></td><td class="crd-td">SDN: 12,91, 31,21</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">6,4k</td><td class="crd-td">9,5k</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bābanūsah</strong></td><td class="crd-td">SDN: 11,33, 27,81</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Jubayha</strong></td><td class="crd-td">SDN: 11,47, 31,23</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">8,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Farchana</strong></td><td class="crd-td">TCD: 13,59, 21,83</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,5k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>al-Rahad</strong></td><td class="crd-td">SDN: 12,73, 30,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Anjakoaty</strong></td><td class="crd-td">SDN: 12,13, 22,6</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,5k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-La'ayt</strong></td><td class="crd-td">SDN: 11,96, 27,05</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Dalanj</strong></td><td class="crd-td">SDN: 12,04, 29,64</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,4k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bara</strong></td><td class="crd-td">SDN: 13,69, 30,37</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Um Dukhun</strong></td><td class="crd-td">SDN: 11,15, 22,97</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Dulayq</strong></td><td class="crd-td">SDN: 12,47, 23,26</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Malha</strong></td><td class="crd-td">SDN: 15,09, 26,16</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fūlah</strong></td><td class="crd-td">SDN: 11,72, 28,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Taludy</strong></td><td class="crd-td">SDN: 10,63, 30,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duaiym</strong></td><td class="crd-td">SDN: 11,46, 26,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Rashad</strong></td><td class="crd-td">SDN: 11,86, 31,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Mujlad</strong></td><td class="crd-td">SDN: 11,03, 27,76</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kulbus</strong></td><td class="crd-td">SDN: 14,36, 22,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Muhajiriya</strong></td><td class="crd-td">SDN: 11,99, 25,62</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Ghubaysh</strong></td><td class="crd-td">SDN: 12,16, 27,33</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Adré</strong></td><td class="crd-td">TCD: 13,46, 22,2</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Tandaltī</strong></td><td class="crd-td">SDN: 13,02, 31,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Kotum</strong></td><td class="crd-td">SDN: 14,21, 24,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dar al-Salam Janub</strong></td><td class="crd-td">SDN: 13,06, 25,54</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Madinat Kabkabiyya</strong></td><td class="crd-td">SDN: 13,65, 24,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 153 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Darfur and Kordofan (1880AD to 1960AD) (top 40 of 193 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Southern Provinces

Table \ref{tab:sub-sdn-south} compiles 152 settlements across Bahr el Ghazal, Upper Nile and Equatoria together with border-post Moyo, led by Juba (18k agglomeration, 10,7k city proper), Malakal (13,8k), Wau (13,6k) and Yambio (8,4k) [@Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aluakaluak</strong></td><td class="crd-td">SSD: 6,45, 30,1</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">18,1k</td><td class="crd-td">20,4k</td><td class="crd-td">-</td><td class="crd-td">54,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Juba (Agglomeration)</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">17k</td><td class="crd-td">18k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kap</strong></td><td class="crd-td">SSD: 6,64, 30,44</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">9k</td><td class="crd-td">13k</td><td class="crd-td">-</td><td class="crd-td">17,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Maracha</strong></td><td class="crd-td">UGA: 3,26, 30,98</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">2,2k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">16k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Malakal</strong></td><td class="crd-td">SSD: 9,53, 31,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">9,6k</td><td class="crd-td">13,8k</td><td class="crd-td">13,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">SSD: 7,7, 27,96</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">6,3k</td><td class="crd-td">8,1k</td><td class="crd-td">13,6k</td><td class="crd-td">13,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Lamila</strong></td><td class="crd-td">UGA: 3,18, 30,93</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">2,1k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">12,2k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Juba</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">10,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Jalimo</strong></td><td class="crd-td">SSD: 3,83, 31,66</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">10,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Palabek</strong></td><td class="crd-td">UGA: 3,44, 32,58</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">10k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Nyainthokmalual</strong></td><td class="crd-td">SSD: 9,31, 31,59</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">6,2k</td><td class="crd-td">9k</td><td class="crd-td">-</td><td class="crd-td">9,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Kindi</strong></td><td class="crd-td">SSD: 3,69, 30,77</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">8,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Bura</strong></td><td class="crd-td">UGA: 3,25, 31,12</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Debalo</strong></td><td class="crd-td">SSD: 9,57, 31,68</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">6,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Deim Zubeir</strong></td><td class="crd-td">SSD: 7,72, 26,22</td><td class="crd-td">6,2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Rumbek</strong></td><td class="crd-td">SSD: 6,76, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Jinkuata</strong></td><td class="crd-td">SSD: 9,98, 33,62</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gok Machar</strong></td><td class="crd-td">SSD: 9,23, 26,87</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>But</strong></td><td class="crd-td">SDN: 11,42, 33,38</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">SSD: 6,2, 31,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Aduel</strong></td><td class="crd-td">SSD: 6,57, 29,86</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Agok</strong></td><td class="crd-td">SSD: 9,35, 28,59</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Renk</strong></td><td class="crd-td">SSD: 11,75, 32,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lokurubang</strong></td><td class="crd-td">SSD: 4,35, 31,07</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ayien</strong></td><td class="crd-td">SSD: 9,09, 28,43</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Tambura</strong></td><td class="crd-td">SSD: 5,6, 27,47</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Pajok</strong></td><td class="crd-td">SSD: 3,87, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Andata</strong></td><td class="crd-td">COD: 3,81, 29,93</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Tonj</strong></td><td class="crd-td">SSD: 7,28, 28,67</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,9k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gogrial</strong></td><td class="crd-td">SSD: 8,53, 28,1</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Alok</strong></td><td class="crd-td">SSD: 8,37, 27,62</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Aweil</strong></td><td class="crd-td">SSD: 8,75, 27,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Yirol</strong></td><td class="crd-td">SSD: 6,54, 30,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kodok</strong></td><td class="crd-td">SSD: 9,89, 32,11</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Yei</strong></td><td class="crd-td">SSD: 4,09, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kuacjok</strong></td><td class="crd-td">SSD: 8,29, 27,97</td><td class="crd-td">700</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Raga</strong></td><td class="crd-td">SSD: 8,46, 25,68</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Maridi</strong></td><td class="crd-td">SSD: 4,89, 29,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Torit</strong></td><td class="crd-td">SSD: 4,41, 32,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 112 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Southern Provinces (1880AD to 1960AD) (top 40 of 152 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three constraints bound this settlement gazetteer. First, 28 of the 239 records carry single-date observations, producing hyphens outside their observed date. Second, seven capitals pair metropolitan agglomerations (1950AD to 1960AD) with municipal cores, while two towns (Wad Madanī alongside Wad Medani, and Harar alongside Harare) preserve distinct source series that should not be summed as independent cities. Third, combined settlement counts reflect attested towns and administrative stations rather than full rural populations reported in the companion review.

# Conclusion

Together, these 1.452 individually assessed settlements trace the transformation of Northeast Africa's urban system from Mahdist Omdurman and late nineteenth-century caravan centres to the railway, irrigated and metropolitan capitals of 1960AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined interpolated settlement populations across all nine sub-regions at the six chapter benchmarks from 1880AD to 1960AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1956AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands (218)</strong></td><td class="crd-td">34,6k</td><td class="crd-td">350,6k</td><td class="crd-td">474k</td><td class="crd-td">1,02M</td><td class="crd-td">968k</td><td class="crd-td">1,11M</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest (286)</strong></td><td class="crd-td">24,2k</td><td class="crd-td">378,5k</td><td class="crd-td">513,7k</td><td class="crd-td">427,4k</td><td class="crd-td">26,9k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden (53)</strong></td><td class="crd-td">4,7k</td><td class="crd-td">105,3k</td><td class="crd-td">138k</td><td class="crd-td">172,3k</td><td class="crd-td">77,8k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea (110)</strong></td><td class="crd-td">4,2k</td><td class="crd-td">119,9k</td><td class="crd-td">170,1k</td><td class="crd-td">335,5k</td><td class="crd-td">161k</td><td class="crd-td">174,4k</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland (93)</strong></td><td class="crd-td">263</td><td class="crd-td">89,8k</td><td class="crd-td">127,2k</td><td class="crd-td">168k</td><td class="crd-td">93,2k</td><td class="crd-td">98,7k</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS) (119)</strong></td><td class="crd-td">13k</td><td class="crd-td">128,2k</td><td class="crd-td">216,4k</td><td class="crd-td">334,5k</td><td class="crd-td">165,1k</td><td class="crd-td">207,3k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala (228)</strong></td><td class="crd-td">106,2k</td><td class="crd-td">501k</td><td class="crd-td">814,8k</td><td class="crd-td">1,09M</td><td class="crd-td">702k</td><td class="crd-td">838,2k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan (193)</strong></td><td class="crd-td">1,4k</td><td class="crd-td">220,7k</td><td class="crd-td">382,9k</td><td class="crd-td">340,8k</td><td class="crd-td">131,9k</td><td class="crd-td">154,9k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces (152)</strong></td><td class="crd-td">11,3k</td><td class="crd-td">164,2k</td><td class="crd-td">255,9k</td><td class="crd-td">242,1k</td><td class="crd-td">37k</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (1.452)</strong></td><td class="crd-td">199,7k</td><td class="crd-td">2,06M</td><td class="crd-td">3,09M</td><td class="crd-td">4,13M</td><td class="crd-td">2,36M</td><td class="crd-td">2,74M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed site counts and combined interpolated populations across nine sub-regions (1880AD to 1960AD).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-abandonment benchmarks are marked with a hyphen (-).
