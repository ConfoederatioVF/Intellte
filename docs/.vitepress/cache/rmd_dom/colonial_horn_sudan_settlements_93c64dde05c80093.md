---
title: "Colonial Horn of Africa and Anglo-Egyptian Sudan"
subtitle: "Settlement Gazetteer: 239 Individually Assessed Sites (1880AD-1960AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_horn_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 239 individually assessed settlements across nine colonial and imperial sub-regions in the Horn of Africa and Anglo-Egyptian Sudan (1880AD to 1960AD)."
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

This gazetteer compiles coordinates and multi-date population series for 239 individually assessed settlements across eleven modern jurisdictions in the Horn of Africa and Anglo-Egyptian Sudan between 1880AD and 1960AD. Screened from 263 candidate towns, railway stations, colonial administrative posts and historic ports (24 duplicate aliases excluded), the retained entries span nine sub-regions across Imperial Ethiopia, Italian Eritrea, French and British Somaliland, Italian Somaliland and the nine Condominium provinces of Sudan. Active interpolated records expand from 27 settlements in 1880AD to 138 in 1910AD, 165 in 1930AD and 192 in 1950AD, led by Addis Ababa (541,7k agglomeration, 444k city proper), Khartoum (342,7k agglomeration), Omdurman (148k), Asmara (123,5k) and Mogadishu (101,5k).



# Background

Compiling an urban and small-town ledger across Northeast Africa between 1880AD and 1960AD requires integrating divergent archival traditions. Imperial Ethiopia lacked national censuses prior to 1984AD, leaving Addis Ababa, Harar, Dire Dawa, Gonder and Dese documented through traveller counts, Italian occupation municipal surveys and post-war statistical tallies [@Pankhurst1968EconomicHistory; @ARCCH2020EthiopiaInventory]. By contrast, Italian Eritrea produced systematic enumerations from 1905AD to 1939AD [@Fuller2011ItalyColonial], British and Italian Somalilands relied on port Blue Books and protectorate returns [@Omar2001ScrambleHorn; @Kuczynski1949DemographicSurvey2], and Anglo-Egyptian Sudan transitioned from early Condominium tax rolls to the 1955-1956 First Population Census [@Division1922HandbookThe; @Sudan1956Census].

# Methodology

## Candidate Screening and Sub-Regional Assignment

Of 263 candidate entries inside the 4.407.073 km² study domain bounded over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 24 duplicate transliteration aliases were removed, retaining 239 individually assessed settlements across 786 chronological observations. Each entry is assigned to one of the nine colonial or imperial sub-regions (237 inside the 5-arcminute interior raster plus Birao and Faza reconciled on the western Darfur and southern Somali margins).

## Scope Conventions and Linear Interpolation

The ledger distinguishes 232 city-proper municipal records from 7 post-1950 metropolitan agglomerations (Addis Ababa, Khartoum, Asmara, Mogadishu, Hargeisa, Djibouti and Juba) [@Demisse2024UrbanLand; @Darwich2025PortInfrastructures]. Tables 1 to 9 report linearly interpolated headcounts at five benchmarks (1880AD, 1910AD, 1930AD, 1950AD and 1960AD) alongside each entry's peak population and date, marking benchmarks outside an entry's observed span with a hyphen (-).

# Testing and Validation

Across all 239 retained settlements, upper-half Zipf regression (119 entries) yields $q = 1,07$ ($R^2 = 0,99$) and full-sample regression yields $q = 1,21$ ($R^2 = 0,96$), aligning closely with the 230 spatially deduplicated settlement peaks displayed in Figure \ref{fig:settlements-rank} ($q = 0,98$, $R^2 = 0,99$).

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-horn-sudan-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 230 spatially deduplicated settlements (q = 0,98, R² = 0,99) and mean sub-regional density in 1960AD.</figcaption>
</figure>

# Results

## Imperial Ethiopia: Northern and Central Highlands

Table \ref{tab:sub-eth-north} records 30 settlements across Shewa, Tigray, Begemder, Gojjam and Wollo, anchored by Addis Ababa (541,7k agglomeration, 444k city proper), Dese (46,9k), Gonder (22,8k), Entoto (18,5k), Mekele (15,3k), Debere Markos (15k) and Aksum (13k) [@Pankhurst1968EconomicHistory; @Sulas2014AksumWater].

<figure class="crd-table-figure" id="tab:sub-eth-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Addis Ababa (Agglomeration)</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">363,4k</td><td class="crd-td">541,7k</td><td class="crd-td">541,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">80k</td><td class="crd-td">400k</td><td class="crd-td">444k</td><td class="crd-td">444k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dese</strong></td><td class="crd-td">ETH: 11,16, 39,64</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">28,2k</td><td class="crd-td">46,9k</td><td class="crd-td">44,9k</td><td class="crd-td">46,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">ETH: 12,57, 37,46</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">12,4k</td><td class="crd-td">13,7k</td><td class="crd-td">22,8k</td><td class="crd-td">22,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Entoto</strong></td><td class="crd-td">ETH: 9,08, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Mekele</strong></td><td class="crd-td">ETH: 13,5, 39,47</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">11,1k</td><td class="crd-td">14,2k</td><td class="crd-td">15,3k</td><td class="crd-td">15,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Debere Markos</strong></td><td class="crd-td">ETH: 10,33, 37,74</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">9,4k</td><td class="crd-td">13k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">ETH: 14,12, 38,73</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">7,6k</td><td class="crd-td">11k</td><td class="crd-td">13k</td><td class="crd-td">13k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Adwa</strong></td><td class="crd-td">ETH: 14,18, 38,89</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">8,2k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Birhan</strong></td><td class="crd-td">ETH: 9,68, 39,53</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,7k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,7k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bahir Dar</strong></td><td class="crd-td">ETH: 11,58, 37,38</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">ETH: 11,86, 38</td><td class="crd-td">7,2k</td><td class="crd-td">4,7k</td><td class="crd-td">6k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Liche</strong></td><td class="crd-td">ETH: 9,82, 39,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Adigrat</strong></td><td class="crd-td">ETH: 14,3, 39,46</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Weldiya</strong></td><td class="crd-td">ETH: 11,82, 39,59</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,7k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ankober</strong></td><td class="crd-td">ETH: 9,59, 39,73</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Shire Inda Silase</strong></td><td class="crd-td">ETH: 14,1, 38,28</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Dangila</strong></td><td class="crd-td">ETH: 11,26, 36,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kombolcha</strong></td><td class="crd-td">ETH: 11,08, 39,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Azezo</strong></td><td class="crd-td">ETH: 12,5, 37,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Bichena</strong></td><td class="crd-td">ETH: 10,44, 38,2</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Asayta</strong></td><td class="crd-td">ETH: 11,57, 41,44</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mota</strong></td><td class="crd-td">ETH: 11,07, 37,88</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Sekota</strong></td><td class="crd-td">ETH: 12,63, 39,03</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Were Ilu</strong></td><td class="crd-td">ETH: 10,58, 39,44</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1900AD)</td></tr>
<tr><td class="crd-td"><strong>Lalibela</strong></td><td class="crd-td">ETH: 12,03, 39,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Wukro</strong></td><td class="crd-td">ETH: 13,79, 39,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Aliyu Amba</strong></td><td class="crd-td">ETH: 9,57, 39,83</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Gorgora</strong></td><td class="crd-td">ETH: 12,24, 37,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Mehal Meda</strong></td><td class="crd-td">ETH: 10,31, 39,66</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1938AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Imperial Ethiopia: Northern and Central Highlands (1880AD to 1960AD).</figcaption>
</figure>

## Imperial Ethiopia: Oromo, Kaffa and Southwest

Table \ref{tab:sub-eth-south} lists 35 settlements across Oromia, Kaffa, Sidamo, Gemu Gofa, Illubabor and Gambela, led by Jima (22k), Adama (12,4k), Nekemte (10,8k), Asela (10,7k), Bishoftu (9,8k) and Gore (8,5k) [@Braukamper2013IndigenousViews].

<figure class="crd-table-figure" id="tab:sub-eth-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">ETH: 7,68, 36,84</td><td class="crd-td">11,8k</td><td class="crd-td">13,5k</td><td class="crd-td">18,5k</td><td class="crd-td">18,2k</td><td class="crd-td">18,9k</td><td class="crd-td">22k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Adama</strong></td><td class="crd-td">ETH: 8,51, 39,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Nekemte</strong></td><td class="crd-td">ETH: 9,09, 36,55</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">7,8k</td><td class="crd-td">10,5k</td><td class="crd-td">-</td><td class="crd-td">10,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Asela</strong></td><td class="crd-td">ETH: 7,96, 39,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bishoftu</strong></td><td class="crd-td">ETH: 8,75, 38,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">-</td><td class="crd-td">9,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Gore</strong></td><td class="crd-td">ETH: 8,15, 35,53</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">8k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">8,5k (1925AD)</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">ETH: 6,74, 38,41</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,9k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Soddo</strong></td><td class="crd-td">ETH: 6,86, 37,76</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,9k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Fiche</strong></td><td class="crd-td">ETH: 9,77, 38,74</td><td class="crd-td">3,3k</td><td class="crd-td">4,4k</td><td class="crd-td">5,5k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bonga</strong></td><td class="crd-td">ETH: 7,28, 36,23</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dila</strong></td><td class="crd-td">ETH: 6,42, 38,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ambo</strong></td><td class="crd-td">ETH: 8,96, 37,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Shashemene</strong></td><td class="crd-td">ETH: 7,21, 38,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Goba</strong></td><td class="crd-td">ETH: 7,01, 39,97</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Agaro</strong></td><td class="crd-td">ETH: 7,84, 36,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Hosaena</strong></td><td class="crd-td">ETH: 7,63, 37,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Dalbo</strong></td><td class="crd-td">ETH: 6,88, 37,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Dembi Dolo</strong></td><td class="crd-td">ETH: 8,54, 34,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Negele</strong></td><td class="crd-td">ETH: 5,33, 39,58</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Robe</strong></td><td class="crd-td">ETH: 7,11, 40,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Chiro</strong></td><td class="crd-td">ETH: 9,09, 40,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Gimbi</strong></td><td class="crd-td">ETH: 9,17, 35,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Chencha</strong></td><td class="crd-td">ETH: 6,25, 37,57</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Dodola</strong></td><td class="crd-td">ETH: 6,98, 39,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Anderacha</strong></td><td class="crd-td">ETH: 7,18, 36,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ginir</strong></td><td class="crd-td">ETH: 7,14, 40,71</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bedele</strong></td><td class="crd-td">ETH: 8,45, 36,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Gambela</strong></td><td class="crd-td">ETH: 8,25, 34,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Dirre Sheikh Hussein</strong></td><td class="crd-td">ETH: 7,75, 40,7</td><td class="crd-td">2,9k</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Funyan Bira</strong></td><td class="crd-td">ETH: 9,36, 42,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Moyale</strong></td><td class="crd-td">KEN: 3,53, 39,06</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Yabelo</strong></td><td class="crd-td">ETH: 4,89, 38,11</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mega</strong></td><td class="crd-td">ETH: 4,05, 38,32</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Tarcha</strong></td><td class="crd-td">ETH: 7,18, 37,17</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Fofa</strong></td><td class="crd-td">ETH: 7,87, 37,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Imperial Ethiopia: Oromo, Kaffa and Southwest (1880AD to 1960AD).</figcaption>
</figure>

## Imperial Ethiopia: Hararghe, Bale and Ogaden

Table \ref{tab:sub-eth-east} documents 12 settlements across Hararghe, the Ogaden lowlands and the Mandera border post, headed by Harar (45k), Dire Dawa (42,1k), the Africapolis Harare urban series (41,9k) and Jijiga (12,8k) [@Pankhurst1968EconomicHistory].

<figure class="crd-table-figure" id="tab:sub-eth-east">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Harar</strong></td><td class="crd-td">ETH: 9,31, 42,12</td><td class="crd-td">-</td><td class="crd-td">36,8k</td><td class="crd-td">42,1k</td><td class="crd-td">41,9k</td><td class="crd-td">-</td><td class="crd-td">45k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Dire Dawa</strong></td><td class="crd-td">ETH: 9,61, 41,85</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">18,5k</td><td class="crd-td">26,4k</td><td class="crd-td">42,1k</td><td class="crd-td">42,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ETH: 9,38, 42,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k</td><td class="crd-td">41,9k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Jijiga</strong></td><td class="crd-td">ETH: 9,35, 42,8</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">7,6k</td><td class="crd-td">12,6k</td><td class="crd-td">-</td><td class="crd-td">12,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Degehabur</strong></td><td class="crd-td">ETH: 8,22, 43,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kebri Dehar</strong></td><td class="crd-td">ETH: 6,74, 44,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kelafo</strong></td><td class="crd-td">ETH: 5,59, 44,2</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Fik</strong></td><td class="crd-td">ETH: 8,14, 42,3</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Korahe</strong></td><td class="crd-td">ETH: 6,83, 44,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Misrak Imi</strong></td><td class="crd-td">ETH: 6,47, 42,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Dolo</strong></td><td class="crd-td">ETH: 4,18, 42,06</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mandera</strong></td><td class="crd-td">KEN: 3,94, 41,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Imperial Ethiopia: Hararghe, Bale and Ogaden (1880AD to 1960AD).</figcaption>
</figure>

## Italian Eritrea and BMA Eritrea

Table \ref{tab:sub-eritrea} compiles 20 settlements across Colonia Eritrea and the post-1941AD British Military Administration, led by Asmara (123,5k agglomeration, 120,4k city proper), Massawa (17,2k), Keren (15k), Dek'emhāre (12,8k), Assab (10,4k) and Āk'ordat (10,3k) [@Fuller2011ItalyColonial; @Beyan2021UnemploymentAnd].

<figure class="crd-table-figure" id="tab:sub-eritrea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Asmara (Agglomeration)</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">99,3k</td><td class="crd-td">123,5k</td><td class="crd-td">123,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">21k</td><td class="crd-td">119k</td><td class="crd-td">-</td><td class="crd-td">120,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mits'iwa</strong></td><td class="crd-td">ERI: 15,62, 39,44</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">12k</td><td class="crd-td">15,1k</td><td class="crd-td">15,2k</td><td class="crd-td">17,2k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Keren</strong></td><td class="crd-td">ERI: 15,78, 38,45</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,7k</td><td class="crd-td">11k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dek'emhāre</strong></td><td class="crd-td">ERI: 15,07, 39,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">-</td><td class="crd-td">12,8k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Āseb</strong></td><td class="crd-td">ERI: 13,01, 42,74</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">8,5k</td><td class="crd-td">10,4k</td><td class="crd-td">10,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Āk'ordat</strong></td><td class="crd-td">ERI: 15,54, 37,88</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,4k</td><td class="crd-td">7,6k</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Ugrī</strong></td><td class="crd-td">ERI: 14,89, 38,81</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Teseney</strong></td><td class="crd-td">ERI: 15,1, 36,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī K'eyih</strong></td><td class="crd-td">ERI: 14,85, 39,37</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Gīnda</strong></td><td class="crd-td">ERI: 15,44, 39,1</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Kwala</strong></td><td class="crd-td">ERI: 14,64, 38,83</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Sen'afē</strong></td><td class="crd-td">ERI: 14,7, 39,42</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Barentu</strong></td><td class="crd-td">ERI: 15,11, 37,59</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Arkiko</strong></td><td class="crd-td">ERI: 15,54, 39,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1905AD)</td></tr>
<tr><td class="crd-td"><strong>Debarwa</strong></td><td class="crd-td">ERI: 15,09, 38,84</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Nak'fa</strong></td><td class="crd-td">ERI: 16,67, 38,48</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Edd</strong></td><td class="crd-td">ERI: 13,93, 41,68</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1939AD)</td></tr>
<tr><td class="crd-td"><strong>Raheita</strong></td><td class="crd-td">ERI: 12,73, 43,08</td><td class="crd-td">935</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">935 (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Beylul</strong></td><td class="crd-td">ERI: 13,25, 42,33</td><td class="crd-td">710</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">710 (1880AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Italian Eritrea and BMA Eritrea (1880AD to 1960AD).</figcaption>
</figure>

## French Somaliland and British Somaliland

Table \ref{tab:sub-fr-br-som} presents 17 settlements across French Cote des Somalis and the British Somaliland Protectorate, anchored by Hargeisa (38,4k agglomeration, 34,3k city proper), Djibouti (37,4k agglomeration, 31,5k city proper), Berbera (18,1k), Burao (11,4k), Bulhar (7,2k) and Zeila (6k) [@Darwich2025PortInfrastructures; @Kuczynski1949DemographicSurvey2].

<figure class="crd-table-figure" id="tab:sub-fr-br-som">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hargeisa (Agglomeration)</strong></td><td class="crd-td">SML: 9,56, 44,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,4k</td><td class="crd-td">38,4k</td><td class="crd-td">38,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Djibouti (Agglomeration)</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,9k</td><td class="crd-td">37,4k</td><td class="crd-td">37,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Hargeysa</strong></td><td class="crd-td">SML: 9,56, 44,05</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">14,5k</td><td class="crd-td">31,4k</td><td class="crd-td">-</td><td class="crd-td">34,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">11,1k</td><td class="crd-td">21,4k</td><td class="crd-td">-</td><td class="crd-td">31,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Barbara</strong></td><td class="crd-td">SML: 10,43, 45,01</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">17,8k</td><td class="crd-td">13,8k</td><td class="crd-td">11,5k</td><td class="crd-td">18,1k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Burao</strong></td><td class="crd-td">SML: 9,52, 45,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">9,8k</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bulhar</strong></td><td class="crd-td">SML: 10,39, 44,41</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zeila</strong></td><td class="crd-td">SML: 11,35, 43,47</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">6k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Borama</strong></td><td class="crd-td">SML: 9,94, 43,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>'Erigavo</strong></td><td class="crd-td">SML: 10,62, 47,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Las Anod</strong></td><td class="crd-td">SML: 8,48, 47,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Las Khorey</strong></td><td class="crd-td">SML: 11,16, 48,2</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tadjourah</strong></td><td class="crd-td">DJI: 11,79, 42,88</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Ali-Sabieh</strong></td><td class="crd-td">DJI: 11,15, 42,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Dikhil</strong></td><td class="crd-td">DJI: 11,11, 42,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Obock</strong></td><td class="crd-td">DJI: 11,97, 43,29</td><td class="crd-td">-</td><td class="crd-td">680</td><td class="crd-td">790</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Maydh</strong></td><td class="crd-td">SML: 11, 47,11</td><td class="crd-td">-</td><td class="crd-td">865</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">865 (1910AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in French Somaliland and British Somaliland (1880AD to 1960AD).</figcaption>
</figure>

## Italian Somaliland

Table \ref{tab:sub-it-som} details 28 settlements across Somalia Italiana and the UN Trusteeship Territory alongside border-margin Faza, led by Mogadishu (101,5k agglomeration, 63,3k city proper), Marka (61,6k), Qoryoley (15k), Afgoye (14,9k), Jowhar (14,5k), Kismaayo (11,3k) and Baidoa (11,2k) [@Omar2001ScrambleHorn].

<figure class="crd-table-figure" id="tab:sub-it-som">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mogadishu (Agglomeration)</strong></td><td class="crd-td">SOM: 2,12, 45,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,5k</td><td class="crd-td">101,5k</td><td class="crd-td">101,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">28,4k</td><td class="crd-td">61,6k</td><td class="crd-td">-</td><td class="crd-td">63,3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">9,5k</td><td class="crd-td">61,6k</td><td class="crd-td">29,7k</td><td class="crd-td">61,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Qoryoley</strong></td><td class="crd-td">SOM: 1,79, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">15k</td><td class="crd-td">15k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Afgoye</strong></td><td class="crd-td">SOM: 2,14, 45,12</td><td class="crd-td">7,4k</td><td class="crd-td">5,8k</td><td class="crd-td">7,2k</td><td class="crd-td">9,3k</td><td class="crd-td">14,9k</td><td class="crd-td">14,9k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Jowhar</strong></td><td class="crd-td">SOM: 2,78, 45,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,5k</td><td class="crd-td">13,8k</td><td class="crd-td">14,5k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kismaayo</strong></td><td class="crd-td">SOM: -0,35, 42,55</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">7,3k</td><td class="crd-td">9,9k</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Baidoa</strong></td><td class="crd-td">SOM: 3,12, 43,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">11k</td><td class="crd-td">10,6k</td><td class="crd-td">11,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jamaame</strong></td><td class="crd-td">SOM: 0,07, 42,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">10,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Beledweyne</strong></td><td class="crd-td">SOM: 4,74, 45,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,1k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,5k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Gaalkayo</strong></td><td class="crd-td">SOM: 6,78, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Baar Dheere</strong></td><td class="crd-td">SOM: 2,34, 42,29</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Bosaso</strong></td><td class="crd-td">SOM: 11,26, 49,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Luuq</strong></td><td class="crd-td">SOM: 3,8, 42,54</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Buur Hakaba</strong></td><td class="crd-td">SOM: 2,8, 44,08</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Jilib</strong></td><td class="crd-td">SOM: 0,49, 42,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hafun Settlement</strong></td><td class="crd-td">SOM: 10,42, 51,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Hobyo</strong></td><td class="crd-td">SOM: 5,35, 48,53</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Qardho</strong></td><td class="crd-td">SOM: 9,51, 49,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Warsheikh</strong></td><td class="crd-td">SOM: 2,3, 45,8</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Alula</strong></td><td class="crd-td">SOM: 11,97, 50,76</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Eyl</strong></td><td class="crd-td">SOM: 7,98, 49,82</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bargal</strong></td><td class="crd-td">SOM: 11,29, 51,08</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Garoowe</strong></td><td class="crd-td">SOM: 8,4, 48,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Qandala</strong></td><td class="crd-td">SOM: 11,47, 49,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mareg</strong></td><td class="crd-td">SOM: 3,77, 47,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1931AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in Italian Somaliland and UN Trusteeship Somalia (1880AD to 1960AD).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Nile, Khartoum and Kassala

Table \ref{tab:sub-sdn-north} catalogues 49 settlements across Northern, Khartoum, Kassala and Blue Nile provinces, led by Khartoum (342,7k agglomeration, 124k city proper), Omdurman (148k), Port Sudan (62,7k), Wad Madanī (56,9k), Kassalā (50,7k) and Atbara (42k) [@Division1922HandbookThe; @Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khartoum (Agglomeration)</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">229,4k</td><td class="crd-td">342,7k</td><td class="crd-td">342,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">SDN: 15,64, 32,48</td><td class="crd-td">-</td><td class="crd-td">53,9k</td><td class="crd-td">103,7k</td><td class="crd-td">115,6k</td><td class="crd-td">-</td><td class="crd-td">148k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">50k</td><td class="crd-td">32k</td><td class="crd-td">50k</td><td class="crd-td">68k</td><td class="crd-td">124k</td><td class="crd-td">124k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sūdān</strong></td><td class="crd-td">SDN: 19,6, 37,21</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">21,5k</td><td class="crd-td">39,3k</td><td class="crd-td">62,7k</td><td class="crd-td">62,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">-</td><td class="crd-td">23,3k</td><td class="crd-td">33k</td><td class="crd-td">46k</td><td class="crd-td">56,9k</td><td class="crd-td">56,9k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">SDN: 15,45, 36,35</td><td class="crd-td">15,2k</td><td class="crd-td">14k</td><td class="crd-td">26,4k</td><td class="crd-td">35,7k</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Medani</strong></td><td class="crd-td">SDN: 14,39, 33,52</td><td class="crd-td">12,4k</td><td class="crd-td">14,6k</td><td class="crd-td">29,6k</td><td class="crd-td">45,9k</td><td class="crd-td">-</td><td class="crd-td">47,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>'Aṭbarah</strong></td><td class="crd-td">SDN: 17,73, 33,99</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">19,8k</td><td class="crd-td">29k</td><td class="crd-td">42k</td><td class="crd-td">42k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm Baḥrī</strong></td><td class="crd-td">SDN: 15,65, 32,53</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">20,1k</td><td class="crd-td">35k</td><td class="crd-td">-</td><td class="crd-td">39,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kosty</strong></td><td class="crd-td">SDN: 13,15, 32,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k</td><td class="crd-td">29,1k</td><td class="crd-td">29,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">10,1k</td><td class="crd-td">18k</td><td class="crd-td">27,2k</td><td class="crd-td">27,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kūstī</strong></td><td class="crd-td">SDN: 13,16, 32,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">20,5k</td><td class="crd-td">-</td><td class="crd-td">22,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Ṭawkar</strong></td><td class="crd-td">SDN: 18,42, 37,73</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">11,2k</td><td class="crd-td">15,7k</td><td class="crd-td">14,4k</td><td class="crd-td">16,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duwaym</strong></td><td class="crd-td">SDN: 14, 32,3</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">9,1k</td><td class="crd-td">11,5k</td><td class="crd-td">14,3k</td><td class="crd-td">14,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">5,2k</td><td class="crd-td">7,4k</td><td class="crd-td">9,8k</td><td class="crd-td">12,4k</td><td class="crd-td">13,4k</td><td class="crd-td">13,4k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>al-Jazira Aba</strong></td><td class="crd-td">SDN: 13,31, 32,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Barbar</strong></td><td class="crd-td">SDN: 18,03, 33,99</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">11,3k</td><td class="crd-td">12,3k</td><td class="crd-td">11,9k</td><td class="crd-td">12,3k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">8,2k</td><td class="crd-td">4,8k</td><td class="crd-td">8,4k</td><td class="crd-td">8,2k</td><td class="crd-td">12,1k</td><td class="crd-td">12,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Sinjah</strong></td><td class="crd-td">SDN: 13,15, 33,93</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,5k</td><td class="crd-td">8,9k</td><td class="crd-td">12,1k</td><td class="crd-td">12,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Rufa</strong></td><td class="crd-td">SDN: 14,77, 33,36</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">4,9k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">11,4k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Wadi Halfa</strong></td><td class="crd-td">SDN: 21,8, 31,37</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">8k</td><td class="crd-td">11,1k</td><td class="crd-td">-</td><td class="crd-td">11,1k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>El Hasaheisa</strong></td><td class="crd-td">SDN: 14,74, 33,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Metemma</strong></td><td class="crd-td">SDN: 16,71, 33,36</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Karima</strong></td><td class="crd-td">SDN: 18,55, 31,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manāqil</strong></td><td class="crd-td">SDN: 14,24, 32,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">5,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>al-Qatayna</strong></td><td class="crd-td">SDN: 14,87, 32,37</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">4,6k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Damir</strong></td><td class="crd-td">SDN: 17,59, 33,97</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,6k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Sinkāt</strong></td><td class="crd-td">SDN: 18,84, 36,83</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>El-Mesellemiya</strong></td><td class="crd-td">SDN: 14,57, 33,34</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Merowe</strong></td><td class="crd-td">SDN: 18,51, 31,85</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>El-Kamlin</strong></td><td class="crd-td">SDN: 15,07, 33,2</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,7k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Roseires</strong></td><td class="crd-td">SDN: 11,86, 34,4</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1935AD)</td></tr>
<tr><td class="crd-td"><strong>Ed-Debba</strong></td><td class="crd-td">SDN: 18,05, 30,95</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Argo</strong></td><td class="crd-td">SDN: 19,52, 30,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Karkoj</strong></td><td class="crd-td">SDN: 12,92, 34,03</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Aroma</strong></td><td class="crd-td">SDN: 15,81, 36,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Derudeb</strong></td><td class="crd-td">SDN: 17,53, 36,07</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Korti</strong></td><td class="crd-td">SDN: 18,1, 31,57</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Hamad</strong></td><td class="crd-td">SDN: 19,54, 33,32</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>El-Khandaq</strong></td><td class="crd-td">SDN: 18,6, 30,57</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Abri</strong></td><td class="crd-td">SDN: 20,78, 30,33</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Fazogli</strong></td><td class="crd-td">SDN: 11,28, 34,77</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Regeb</strong></td><td class="crd-td">SDN: 16,05, 35,58</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Trinkitat</strong></td><td class="crd-td">SDN: 18,68, 37,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Erkowit</strong></td><td class="crd-td">SDN: 18,77, 37,1</td><td class="crd-td">-</td><td class="crd-td">785</td><td class="crd-td">889</td><td class="crd-td">994</td><td class="crd-td">-</td><td class="crd-td">1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Dungunab</strong></td><td class="crd-td">SDN: 21,11, 37,13</td><td class="crd-td">-</td><td class="crd-td">765</td><td class="crd-td">832</td><td class="crd-td">898</td><td class="crd-td">-</td><td class="crd-td">915 (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Mohamed Qol</strong></td><td class="crd-td">SDN: 20,9, 37,17</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (1910AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Nile, Khartoum and Kassala (1880AD to 1960AD).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Darfur and Kordofan

Table \ref{tab:sub-sdn-west} records 24 settlements across Darfur and Kordofan together with frontier posts at Adré and Birao, headed by Al-Ubayyiḍ (58,2k), Al-Fāshir (33,5k), Nyālā (18,8k), al-Nuhud (18,5k) and Al-Junaynah (15,6k) [@Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-west">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">-</td><td class="crd-td">15,4k</td><td class="crd-td">28,4k</td><td class="crd-td">48,1k</td><td class="crd-td">58,2k</td><td class="crd-td">58,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">-</td><td class="crd-td">12,1k</td><td class="crd-td">16,5k</td><td class="crd-td">21,7k</td><td class="crd-td">33,5k</td><td class="crd-td">33,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Nyālā</strong></td><td class="crd-td">SDN: 12,06, 24,89</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">8,5k</td><td class="crd-td">10,8k</td><td class="crd-td">18,8k</td><td class="crd-td">18,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>al-Nuhud</strong></td><td class="crd-td">SDN: 12,69, 28,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k</td><td class="crd-td">18,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>An-Nuhūd</strong></td><td class="crd-td">SDN: 12,7, 28,43</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">11,5k</td><td class="crd-td">16,2k</td><td class="crd-td">-</td><td class="crd-td">16,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">6,6k</td><td class="crd-td">10,6k</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Um Rowaba</strong></td><td class="crd-td">SDN: 12,91, 31,21</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">6,4k</td><td class="crd-td">7,3k</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>al-Rahad</strong></td><td class="crd-td">SDN: 12,73, 30,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Bara</strong></td><td class="crd-td">SDN: 13,69, 30,37</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>al-Dalanj</strong></td><td class="crd-td">SDN: 12,04, 29,64</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duaiym</strong></td><td class="crd-td">SDN: 11,46, 26,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Madinat Kabkabiyya</strong></td><td class="crd-td">SDN: 13,65, 24,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Adré</strong></td><td class="crd-td">TCD: 13,46, 22,2</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Mellit</strong></td><td class="crd-td">SDN: 14,14, 25,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kotum</strong></td><td class="crd-td">SDN: 14,21, 24,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>El Fula</strong></td><td class="crd-td">SDN: 11,73, 28,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Taludy</strong></td><td class="crd-td">SDN: 10,63, 30,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Rashad</strong></td><td class="crd-td">SDN: 11,86, 31,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Kaka</strong></td><td class="crd-td">SSD: 10,63, 32,18</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Abu Haraz</strong></td><td class="crd-td">SDN: 13,02, 29,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Birao</strong></td><td class="crd-td">CAF: 10,28, 22,79</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kajmar</strong></td><td class="crd-td">SDN: 14,42, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870 (1920AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Darfur and Kordofan (1880AD to 1960AD).</figcaption>
</figure>

## Anglo-Egyptian Sudan: Southern Provinces

Table \ref{tab:sub-sdn-south} compiles 24 settlements across Bahr el Ghazal, Upper Nile and Equatoria together with border-post Moyo, led by Juba (18k agglomeration, 10,7k city proper), Malakal (13,8k), Wau (13,6k) and Yambio (8,4k) [@Sudan1956Census].

<figure class="crd-table-figure" id="tab:sub-sdn-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Juba (Agglomeration)</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">17k</td><td class="crd-td">18k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Malakal</strong></td><td class="crd-td">SSD: 9,53, 31,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">8,9k</td><td class="crd-td">13,8k</td><td class="crd-td">13,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">SSD: 7,7, 27,96</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,7k</td><td class="crd-td">7,5k</td><td class="crd-td">13,6k</td><td class="crd-td">13,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Juba</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">9,4k</td><td class="crd-td">-</td><td class="crd-td">10,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Deim Zubeir</strong></td><td class="crd-td">SSD: 7,72, 26,22</td><td class="crd-td">6,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kodok</strong></td><td class="crd-td">SSD: 9,89, 32,11</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Gondokoro</strong></td><td class="crd-td">SSD: 4,9, 31,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1898AD)</td></tr>
<tr><td class="crd-td"><strong>Rumbek</strong></td><td class="crd-td">SSD: 6,76, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Aweil</strong></td><td class="crd-td">SSD: 8,75, 27,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Nasir</strong></td><td class="crd-td">SSD: 8,61, 33,07</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Torit</strong></td><td class="crd-td">SSD: 4,41, 32,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">SSD: 6,2, 31,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Maridi</strong></td><td class="crd-td">SSD: 4,89, 29,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Renk</strong></td><td class="crd-td">SSD: 11,75, 32,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Tonj</strong></td><td class="crd-td">SSD: 7,28, 28,67</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Raga</strong></td><td class="crd-td">SSD: 8,46, 25,68</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Yirol</strong></td><td class="crd-td">SSD: 6,54, 30,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Yei</strong></td><td class="crd-td">SSD: 4,09, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Tonga</strong></td><td class="crd-td">SSD: 9,47, 31,05</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Moyo</strong></td><td class="crd-td">UGA: 3,66, 31,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Meshra er-Req</strong></td><td class="crd-td">SSD: 8,42, 29,27</td><td class="crd-td">-</td><td class="crd-td">795</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">795 (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Shambe</strong></td><td class="crd-td">SSD: 7,1, 30,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">715 (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Detwok</strong></td><td class="crd-td">SSD: 10,17, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">690 (1920AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Anglo-Egyptian Sudan: Southern Provinces (1880AD to 1960AD).</figcaption>
</figure>

# Limitations

Three constraints bound this settlement gazetteer. First, 28 of the 239 records carry single-date observations, producing hyphens outside their observed date. Second, seven capitals pair metropolitan agglomerations (1950AD to 1960AD) with municipal cores, while two towns (Wad Madanī alongside Wad Medani, and Harar alongside Harare) preserve distinct source series that should not be summed as independent cities. Third, combined settlement counts reflect attested towns and administrative stations rather than full rural populations reported in the companion review.

# Conclusion

Together, these 239 individually assessed settlements trace the transformation of Northeast Africa's urban system from Mahdist Omdurman and late nineteenth-century caravan centres to the railway, irrigated and metropolitan capitals of 1960AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined interpolated settlement populations across all nine sub-regions at the six chapter benchmarks from 1880AD to 1960AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1880AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1950AD</th><th class="crd-th">1956AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Northern and Central Highlands (30)</strong></td><td class="crd-td">13,6k</td><td class="crd-td">155,4k</td><td class="crd-td">206,3k</td><td class="crd-td">925,3k</td><td class="crd-td">967,7k</td><td class="crd-td">1,11M</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Oromo, Kaffa and Southwest (35)</strong></td><td class="crd-td">23k</td><td class="crd-td">56,6k</td><td class="crd-td">94,9k</td><td class="crd-td">171k</td><td class="crd-td">26,9k</td><td class="crd-td">29,5k</td></tr>
<tr><td class="crd-td"><strong>Imperial Ethiopia: Hararghe, Bale and Ogaden (12)</strong></td><td class="crd-td">4,7k</td><td class="crd-td">55,3k</td><td class="crd-td">76,3k</td><td class="crd-td">139,9k</td><td class="crd-td">77,8k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Italian Eritrea and BMA Eritrea (20)</strong></td><td class="crd-td">1,6k</td><td class="crd-td">45,2k</td><td class="crd-td">68,4k</td><td class="crd-td">302,9k</td><td class="crd-td">161k</td><td class="crd-td">174,4k</td></tr>
<tr><td class="crd-td"><strong>French Somaliland and British Somaliland (17)</strong></td><td class="crd-td">0</td><td class="crd-td">43,7k</td><td class="crd-td">59,2k</td><td class="crd-td">160,1k</td><td class="crd-td">93,2k</td><td class="crd-td">98,7k</td></tr>
<tr><td class="crd-td"><strong>Italian Somaliland (Somalia Italiana / AFIS) (28)</strong></td><td class="crd-td">10,3k</td><td class="crd-td">54k</td><td class="crd-td">105,2k</td><td class="crd-td">287,1k</td><td class="crd-td">155,8k</td><td class="crd-td">207,3k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Nile, Khartoum and Kassala (49)</strong></td><td class="crd-td">101,7k</td><td class="crd-td">280k</td><td class="crd-td">467,9k</td><td class="crd-td">880,9k</td><td class="crd-td">702k</td><td class="crd-td">838,2k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Darfur and Kordofan (24)</strong></td><td class="crd-td">0</td><td class="crd-td">65,6k</td><td class="crd-td">114k</td><td class="crd-td">168k</td><td class="crd-td">115,6k</td><td class="crd-td">154,9k</td></tr>
<tr><td class="crd-td"><strong>Anglo-Egyptian Sudan: Southern Provinces (24)</strong></td><td class="crd-td">7,9k</td><td class="crd-td">21,1k</td><td class="crd-td">35,2k</td><td class="crd-td">74,9k</td><td class="crd-td">37k</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (239)</strong></td><td class="crd-td">162,8k</td><td class="crd-td">777,2k</td><td class="crd-td">1,23M</td><td class="crd-td">3,11M</td><td class="crd-td">2,34M</td><td class="crd-td">2,74M</td></tr>
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
