---
title: "Post-Colonial Sudan, Ethiopia and the Horn"
subtitle: "Settlement Gazetteer: 1.221 Assessed Localities (1956-2025)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_horn_sudan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 1.221 assessed settlements across Sudan, Ethiopia, South Sudan, Somalia, Somaliland, Eritrea, Djibouti and border zones from 1956AD to 2025AD."
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

This companion gazetteer compiles spatial coordinates, administrative scopes and multi-period population series for 1.221 assessed settlements across Sudan, Ethiopia, South Sudan, Somalia, Somaliland, Eritrea, Djibouti and adjacent frontier buffer zones between 1956AD and 2025AD. Screened from 1.315 candidate municipal enumerations, morphological urban footprints and humanitarian camp surveys (94 duplicate aliases excluded), the retained entries span 5.748 chronological observations across 71 first-level administrative divisions. Active interpolated localities rise from 166 in 1956AD to 179 in 1972AD, 221 in 1983AD, 294 in 1993AD, 479 in 2009AD and 1.102 in 2025AD, documenting urban concentration from Khartoum (9,62M agglomeration) and Addis Ababa (4,89M) to Mogadishu (2,05M), Hargeisa (1,36M), Juba (1,22M), Asmara (896k) and Djibouti City (767,2k).



# Background

Urban population documentation across north-eastern Africa reflects sharp administrative contrasts between countries with long post-colonial municipal census series and territories disrupted by decades of conflict [@CSA2010EthiopiaCensus; @CBS2009SudanCensus; @Bank2022SomaliaUrban]. Sudan enumerated major towns in 1955-1956, 1973AD, 1983AD, 1993AD and 2008AD, whereas Ethiopia instituted national censuses in 1984AD, 1994AD and 2007AD alongside subsequent Central Statistical Agency municipal projections [@CSA2010EthiopiaCensus; @CBS2009SudanCensus]. In Somalia, Eritrea and South Sudan, multi-decade census interruptions shifted urban tracking onto United Nations surveys, humanitarian displacement assessments and satellite built-up mappings [@OECD2024Africapolis; @Tesfay2024LotQuality]. Unifying these records into a single spatial ledger illuminates how state formation, famine, drought and forced migration restructured the regional urban hierarchy since 1956AD [@Bank2015EasternAfrica; @Hussein2024TheImpact].

# Methodology

## Candidate Screening and Spatial Scope Classification

Candidate settlements were screened across four waves from national statistical agencies, historical gazetteers [@ARCCH2020EthiopiaInventory], OECD/SWAC Africapolis 2024 morphological footprints [@OECD2024Africapolis] and refugee camp registers [@Bank2015EasternAfrica; @Tesfay2024LotQuality]. Inside the 4.398.845 km² domain bounded by HDX COD-AB and geoBoundaries polygons [@Runfola2020GeoBoundaries], 94 duplicate alias or out-of-epoch records were excluded, leaving 1.221 assessed settlements across 5.748 observations. Of those entries, 1.211 carry city-proper municipal or town-level scopes and 10 represent multi-municipality metropolitan agglomerations (Khartoum 2025 and 2008, Addis Ababa, Mogadishu, Hargeisa, Juba, Asmara, Djibouti, Mandera and Qarya 2).

## Country-Level Summary and Regional Centre Selection

Table \ref{tab:country-summary} summarises all 1.221 settlements by jurisdiction, reporting city-proper counts, metropolitan entries, observation totals and peak populations. In Section 5, Tables \ref{tab:gaz-eth} to \ref{tab:gaz-border} present linearly interpolated populations at four historical checkpoints (1960AD, 1983AD, 2008AD and 2025AD) alongside each centre's exact peak population and year, marking gaps outside observed spans with a hyphen (-). For high-count jurisdictions (Ethiopia 591, Sudan 364, South Sudan 75, Somalia 59 and the five border states 60), tables report the leading regional centres by peak population; for Somaliland (12), Eritrea (34) and Djibouti (26), every assessed settlement is listed.

<figure class="crd-table-figure" id="tab:country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Localities</th><th class="crd-th">City-Proper</th><th class="crd-th">Metro</th><th class="crd-th">Observations</th><th class="crd-th">Leading Centre</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ethiopia</strong></td><td class="crd-td">591</td><td class="crd-td">590</td><td class="crd-td">1</td><td class="crd-td">2.872</td><td class="crd-td">Addis Ababa (Agglomeration) (4,89M)</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">364</td><td class="crd-td">361</td><td class="crd-td">3</td><td class="crd-td">1.708</td><td class="crd-td">Khartoum (Agglomeration) (9,62M)</td></tr>
<tr><td class="crd-td"><strong>South Sudan</strong></td><td class="crd-td">75</td><td class="crd-td">74</td><td class="crd-td">1</td><td class="crd-td">344</td><td class="crd-td">Juba (Agglomeration) (1,22M)</td></tr>
<tr><td class="crd-td"><strong>Somalia</strong></td><td class="crd-td">59</td><td class="crd-td">58</td><td class="crd-td">1</td><td class="crd-td">268</td><td class="crd-td">Mogadishu (Agglomeration) (2,05M)</td></tr>
<tr><td class="crd-td"><strong>Eritrea</strong></td><td class="crd-td">34</td><td class="crd-td">33</td><td class="crd-td">1</td><td class="crd-td">198</td><td class="crd-td">Āsmera (896k)</td></tr>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">26</td><td class="crd-td">25</td><td class="crd-td">1</td><td class="crd-td">68</td><td class="crd-td">Djibouti (767,2k)</td></tr>
<tr><td class="crd-td"><strong>Somaliland</strong></td><td class="crd-td">12</td><td class="crd-td">11</td><td class="crd-td">1</td><td class="crd-td">70</td><td class="crd-td">Hargeisa (Agglomeration) (1,36M)</td></tr>
<tr><td class="crd-td"><strong>Uganda</strong></td><td class="crd-td">24</td><td class="crd-td">24</td><td class="crd-td">0</td><td class="crd-td">63</td><td class="crd-td">Yumbe (333,3k)</td></tr>
<tr><td class="crd-td"><strong>Chad</strong></td><td class="crd-td">14</td><td class="crd-td">14</td><td class="crd-td">0</td><td class="crd-td">55</td><td class="crd-td">Bredjing camp (56,7k)</td></tr>
<tr><td class="crd-td"><strong>Kenya</strong></td><td class="crd-td">11</td><td class="crd-td">10</td><td class="crd-td">1</td><td class="crd-td">61</td><td class="crd-td">Mandera (131,3k)</td></tr>
<tr><td class="crd-td"><strong>DR Congo</strong></td><td class="crd-td">9</td><td class="crd-td">9</td><td class="crd-td">0</td><td class="crd-td">34</td><td class="crd-td">Ariwara (104,6k)</td></tr>
<tr><td class="crd-td"><strong>Central African Rep.</strong></td><td class="crd-td">2</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">7</td><td class="crd-td">Ouandja-Kotto (16,7k)</td></tr>
<tr><td class="crd-td"><strong>Total Ledger</strong></td><td class="crd-td">1.221</td><td class="crd-td">1.211</td><td class="crd-td">10</td><td class="crd-td">5.748</td><td class="crd-td">Khartoum (9,62M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Country-level summary of all 1.221 assessed settlements across the Horn, Sudan and adjacent border corridors.</figcaption>
</figure>

# Testing and Validation

Across all 1.221 assessed settlements, ordinary least-squares rank-size calibration on peak populations yields $q = 1,02$ ($R^2 = 0,996$) over the upper 180 centres and $q = 1,02$ ($R^2 = 0,95$) across the full ledger, matching the 1.199 spatially deduplicated peaks plotted in Figure \ref{fig:settlements-rank} ($q = 0,95$, $R^2 = 1$). Zero Admin-1 polygons lack interior settlements, and city-proper records remain structurally separated from metropolitan agglomerations [@OECD2024Africapolis; @Runfola2020GeoBoundaries].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-horn-sudan-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size distribution across 1.199 spatially deduplicated settlements (q = 0,95, R² = 1) and the ten densest Admin-1 divisions in 2025AD.</figcaption>
</figure>

# Results

## Ethiopia: Leading Regional Centres

Table \ref{tab:gaz-eth} presents the 40 largest localities out of Ethiopia's 591 assessed settlements, spanning Addis Ababa (4,89M agglomeration; 3,86M city proper), regional capitals (Adama, Mekelle, Bahir Dar, Dire Dawa, Gondar, Dessie, Jimma, Jijiga) and dense southern highland urban corridors around Wolayta Sodo, Hawassa and Harar [@CSA2010EthiopiaCensus; @Ayenachew2024NavigatingUrbanization; @Mehari2017ChallengesAnd].

<figure class="crd-table-figure" id="tab:gaz-eth">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Addis Ababa (Agglomeration)</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">Metro</td><td class="crd-td">541,7k</td><td class="crd-td">1,44M</td><td class="crd-td">2,87M</td><td class="crd-td">4,89M</td><td class="crd-td">4,89M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adis Abeba</strong></td><td class="crd-td">ETH: 8,88, 38,77</td><td class="crd-td">City</td><td class="crd-td">444k</td><td class="crd-td">1,38M</td><td class="crd-td">2,81M</td><td class="crd-td">-</td><td class="crd-td">3,86M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Sodo</strong></td><td class="crd-td">ETH: 7,11, 37,63</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">23,6k</td><td class="crd-td">83k</td><td class="crd-td">3,7M</td><td class="crd-td">3,7M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">ETH: 6,74, 38,41</td><td class="crd-td">City</td><td class="crd-td">9,4k</td><td class="crd-td">33,9k</td><td class="crd-td">171,5k</td><td class="crd-td">3,18M</td><td class="crd-td">3,18M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Harare</strong></td><td class="crd-td">ETH: 9,38, 42,1</td><td class="crd-td">City</td><td class="crd-td">41,9k</td><td class="crd-td">62,9k</td><td class="crd-td">104,9k</td><td class="crd-td">1,01M</td><td class="crd-td">1,01M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adama</strong></td><td class="crd-td">ETH: 8,51, 39,27</td><td class="crd-td">City</td><td class="crd-td">23,6k</td><td class="crd-td">73,5k</td><td class="crd-td">231,6k</td><td class="crd-td">609,4k</td><td class="crd-td">609,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mekele</strong></td><td class="crd-td">ETH: 13,5, 39,47</td><td class="crd-td">City</td><td class="crd-td">15,3k</td><td class="crd-td">58,6k</td><td class="crd-td">220,5k</td><td class="crd-td">607,7k</td><td class="crd-td">607,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bahir Dar</strong></td><td class="crd-td">ETH: 11,58, 37,38</td><td class="crd-td">City</td><td class="crd-td">13,1k</td><td class="crd-td">51,3k</td><td class="crd-td">164,9k</td><td class="crd-td">564,5k</td><td class="crd-td">564,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gonder</strong></td><td class="crd-td">ETH: 12,57, 37,46</td><td class="crd-td">City</td><td class="crd-td">22,8k</td><td class="crd-td">76,6k</td><td class="crd-td">219,7k</td><td class="crd-td">540,7k</td><td class="crd-td">540,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Awasa</strong></td><td class="crd-td">ETH: 7,06, 38,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">422,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Shashemene</strong></td><td class="crd-td">ETH: 7,21, 38,6</td><td class="crd-td">City</td><td class="crd-td">8,3k</td><td class="crd-td">29,7k</td><td class="crd-td">105,7k</td><td class="crd-td">419,6k</td><td class="crd-td">419,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dire Dawa</strong></td><td class="crd-td">ETH: 9,61, 41,85</td><td class="crd-td">City</td><td class="crd-td">42,1k</td><td class="crd-td">96,3k</td><td class="crd-td">238,4k</td><td class="crd-td">415,5k</td><td class="crd-td">415,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dese</strong></td><td class="crd-td">ETH: 11,16, 39,64</td><td class="crd-td">City</td><td class="crd-td">44,9k</td><td class="crd-td">67,6k</td><td class="crd-td">127,4k</td><td class="crd-td">381,4k</td><td class="crd-td">381,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yirga Chefe</strong></td><td class="crd-td">ETH: 6,19, 38,21</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,5k</td><td class="crd-td">346,8k</td><td class="crd-td">346,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hosaena</strong></td><td class="crd-td">ETH: 7,63, 37,79</td><td class="crd-td">City</td><td class="crd-td">7,7k</td><td class="crd-td">14,7k</td><td class="crd-td">76,4k</td><td class="crd-td">-</td><td class="crd-td">309,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Jima</strong></td><td class="crd-td">ETH: 7,68, 36,84</td><td class="crd-td">City</td><td class="crd-td">18,9k</td><td class="crd-td">60,1k</td><td class="crd-td">127,2k</td><td class="crd-td">298,5k</td><td class="crd-td">298,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bedeno</strong></td><td class="crd-td">ETH: 9,1, 41,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">271,6k</td><td class="crd-td">271,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arba Minch</strong></td><td class="crd-td">ETH: 6,05, 37,55</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">81,7k</td><td class="crd-td">256,6k</td><td class="crd-td">256,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aman</strong></td><td class="crd-td">ETH: 6,96, 35,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,8k</td><td class="crd-td">253,6k</td><td class="crd-td">253,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ambo</strong></td><td class="crd-td">ETH: 8,96, 37,75</td><td class="crd-td">City</td><td class="crd-td">8,9k</td><td class="crd-td">16,8k</td><td class="crd-td">50,7k</td><td class="crd-td">251,7k</td><td class="crd-td">251,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Girawa</strong></td><td class="crd-td">ETH: 9,12, 41,83</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">250,1k</td><td class="crd-td">250,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Butajira</strong></td><td class="crd-td">ETH: 8,08, 38,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">36,5k</td><td class="crd-td">234,6k</td><td class="crd-td">234,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chelenko</strong></td><td class="crd-td">ETH: 9,39, 41,6</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">215,7k</td><td class="crd-td">215,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kombolcha</strong></td><td class="crd-td">ETH: 11,08, 39,72</td><td class="crd-td">City</td><td class="crd-td">6,5k</td><td class="crd-td">14,6k</td><td class="crd-td">62,2k</td><td class="crd-td">208,7k</td><td class="crd-td">208,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bishoftu</strong></td><td class="crd-td">ETH: 8,75, 38,98</td><td class="crd-td">City</td><td class="crd-td">20,2k</td><td class="crd-td">49,9k</td><td class="crd-td">107,1k</td><td class="crd-td">-</td><td class="crd-td">207,4k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Asela</strong></td><td class="crd-td">ETH: 7,96, 39,13</td><td class="crd-td">City</td><td class="crd-td">10,7k</td><td class="crd-td">35,2k</td><td class="crd-td">70,8k</td><td class="crd-td">198,7k</td><td class="crd-td">198,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jijiga</strong></td><td class="crd-td">ETH: 9,35, 42,8</td><td class="crd-td">City</td><td class="crd-td">14k</td><td class="crd-td">21,6k</td><td class="crd-td">127,2k</td><td class="crd-td">159,5k</td><td class="crd-td">198k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Nekemte</strong></td><td class="crd-td">ETH: 9,09, 36,55</td><td class="crd-td">City</td><td class="crd-td">12,9k</td><td class="crd-td">27,6k</td><td class="crd-td">79,1k</td><td class="crd-td">186,2k</td><td class="crd-td">186,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Debere Markos</strong></td><td class="crd-td">ETH: 10,33, 37,74</td><td class="crd-td">City</td><td class="crd-td">15k</td><td class="crd-td">39,2k</td><td class="crd-td">70,1k</td><td class="crd-td">176,2k</td><td class="crd-td">176,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Brehan</strong></td><td class="crd-td">ETH: 9,66, 39,51</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">26,3k</td><td class="crd-td">71,6k</td><td class="crd-td">170,5k</td><td class="crd-td">170,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adigrat</strong></td><td class="crd-td">ETH: 14,3, 39,46</td><td class="crd-td">City</td><td class="crd-td">8,4k</td><td class="crd-td">15,8k</td><td class="crd-td">60,7k</td><td class="crd-td">163,7k</td><td class="crd-td">163,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dila</strong></td><td class="crd-td">ETH: 6,42, 38,32</td><td class="crd-td">City</td><td class="crd-td">10,8k</td><td class="crd-td">23,4k</td><td class="crd-td">65,8k</td><td class="crd-td">-</td><td class="crd-td">158,8k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Harar</strong></td><td class="crd-td">ETH: 9,31, 42,12</td><td class="crd-td">City</td><td class="crd-td">47,9k</td><td class="crd-td">61,6k</td><td class="crd-td">103,2k</td><td class="crd-td">-</td><td class="crd-td">157k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Debretabor</strong></td><td class="crd-td">ETH: 11,86, 38</td><td class="crd-td">City</td><td class="crd-td">8,1k</td><td class="crd-td">14,7k</td><td class="crd-td">59k</td><td class="crd-td">153k</td><td class="crd-td">153k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Birhan</strong></td><td class="crd-td">ETH: 9,68, 39,53</td><td class="crd-td">City</td><td class="crd-td">12,2k</td><td class="crd-td">25,2k</td><td class="crd-td">70,7k</td><td class="crd-td">-</td><td class="crd-td">146,9k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Debre Markos</strong></td><td class="crd-td">ETH: 10,35, 37,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">67,7k</td><td class="crd-td">-</td><td class="crd-td">140,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Zeway/Batu</strong></td><td class="crd-td">ETH: 7,96, 38,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">46,1k</td><td class="crd-td">134,2k</td><td class="crd-td">134,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shire Inda Silase</strong></td><td class="crd-td">ETH: 14,1, 38,28</td><td class="crd-td">City</td><td class="crd-td">7,2k</td><td class="crd-td">12,6k</td><td class="crd-td">49,9k</td><td class="crd-td">128,7k</td><td class="crd-td">128,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Weliso</strong></td><td class="crd-td">ETH: 8,55, 37,97</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">41,1k</td><td class="crd-td">128,6k</td><td class="crd-td">128,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aksum</strong></td><td class="crd-td">ETH: 14,12, 38,73</td><td class="crd-td">City</td><td class="crd-td">13k</td><td class="crd-td">17,7k</td><td class="crd-td">47,1k</td><td class="crd-td">128,3k</td><td class="crd-td">128,3k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Forty leading regional centres and agglomerations in Ethiopia out of 591 assessed settlements (1960AD to 2025AD).</figcaption>
</figure>

## Sudan: Leading Regional Centres

Table \ref{tab:gaz-sdn} details the 40 largest entries among Sudan's 364 assessed settlements, tracing the Khartoum-Omdurman-Khartoum Bahri tri-city alongside Darfur centres (Nyala, El Fasher, Geneina), eastern agricultural and port hubs (Al-Qadarif, Kassala, Port Sudan, Wad Madani) and Kordofan towns (Al-Ubayyid, Kosti) [@CBS2009SudanCensus; @Omer2014TheEffects].

<figure class="crd-table-figure" id="tab:gaz-sdn">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Khartoum (Agglomeration)</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">Metro</td><td class="crd-td">342,7k</td><td class="crd-td">1,48M</td><td class="crd-td">4,42M</td><td class="crd-td">9,62M</td><td class="crd-td">9,62M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm (Agglomeration)</strong></td><td class="crd-td">SDN: 15,55, 32,53</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,27M</td><td class="crd-td">-</td><td class="crd-td">4,27M (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Umm Durmān</strong></td><td class="crd-td">SDN: 15,64, 32,48</td><td class="crd-td">City</td><td class="crd-td">165,2k</td><td class="crd-td">526,2k</td><td class="crd-td">1,85M</td><td class="crd-td">-</td><td class="crd-td">1,85M (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm</strong></td><td class="crd-td">SDN: 15,52, 32,54</td><td class="crd-td">City</td><td class="crd-td">124k</td><td class="crd-td">473,6k</td><td class="crd-td">1,41M</td><td class="crd-td">-</td><td class="crd-td">1,41M (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Kharṭūm Baḥrī</strong></td><td class="crd-td">SDN: 15,65, 32,53</td><td class="crd-td">City</td><td class="crd-td">70,2k</td><td class="crd-td">340,9k</td><td class="crd-td">1,01M</td><td class="crd-td">-</td><td class="crd-td">1,01M (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Nyālā</strong></td><td class="crd-td">SDN: 12,06, 24,89</td><td class="crd-td">City</td><td class="crd-td">18,8k</td><td class="crd-td">111,7k</td><td class="crd-td">493k</td><td class="crd-td">685,3k</td><td class="crd-td">685,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Qaḍārif</strong></td><td class="crd-td">SDN: 14,04, 35,37</td><td class="crd-td">City</td><td class="crd-td">27,2k</td><td class="crd-td">116,9k</td><td class="crd-td">269,4k</td><td class="crd-td">582,3k</td><td class="crd-td">582,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kassalā</strong></td><td class="crd-td">SDN: 15,45, 36,35</td><td class="crd-td">City</td><td class="crd-td">50,7k</td><td class="crd-td">141,4k</td><td class="crd-td">298,5k</td><td class="crd-td">574,2k</td><td class="crd-td">574,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wad Madanī</strong></td><td class="crd-td">SDN: 14,37, 33,54</td><td class="crd-td">City</td><td class="crd-td">56,9k</td><td class="crd-td">145k</td><td class="crd-td">289,5k</td><td class="crd-td">474,5k</td><td class="crd-td">474,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Ubayyiḍ</strong></td><td class="crd-td">SDN: 13,18, 30,22</td><td class="crd-td">City</td><td class="crd-td">58,2k</td><td class="crd-td">137,6k</td><td class="crd-td">345,1k</td><td class="crd-td">443,4k</td><td class="crd-td">443,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Būr Sūdān</strong></td><td class="crd-td">SDN: 19,6, 37,21</td><td class="crd-td">City</td><td class="crd-td">62,7k</td><td class="crd-td">206k</td><td class="crd-td">394,6k</td><td class="crd-td">442,2k</td><td class="crd-td">442,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kosty</strong></td><td class="crd-td">SDN: 13,15, 32,65</td><td class="crd-td">City</td><td class="crd-td">29,1k</td><td class="crd-td">101,4k</td><td class="crd-td">223,5k</td><td class="crd-td">407k</td><td class="crd-td">407k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duaiym</strong></td><td class="crd-td">SDN: 11,46, 26,14</td><td class="crd-td">City</td><td class="crd-td">7,9k</td><td class="crd-td">21,7k</td><td class="crd-td">137,1k</td><td class="crd-td">335,5k</td><td class="crd-td">335,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Damazin</strong></td><td class="crd-td">SDN: 11,82, 34,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">32,6k</td><td class="crd-td">135,6k</td><td class="crd-td">309,8k</td><td class="crd-td">309,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dunqulā</strong></td><td class="crd-td">SDN: 19,15, 30,47</td><td class="crd-td">City</td><td class="crd-td">4k</td><td class="crd-td">10,1k</td><td class="crd-td">56,2k</td><td class="crd-td">276k</td><td class="crd-td">276k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Fāshir</strong></td><td class="crd-td">SDN: 13,63, 25,37</td><td class="crd-td">City</td><td class="crd-td">33,5k</td><td class="crd-td">84,3k</td><td class="crd-td">217,8k</td><td class="crd-td">234,4k</td><td class="crd-td">234,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">City</td><td class="crd-td">15,6k</td><td class="crd-td">55,5k</td><td class="crd-td">134,3k</td><td class="crd-td">197,1k</td><td class="crd-td">231,6k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>al-Khalas</strong></td><td class="crd-td">SDN: 15,79, 32,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">228,7k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kūstī</strong></td><td class="crd-td">SDN: 13,16, 32,66</td><td class="crd-td">City</td><td class="crd-td">34,6k</td><td class="crd-td">89,1k</td><td class="crd-td">213,1k</td><td class="crd-td">-</td><td class="crd-td">213,1k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Sannār</strong></td><td class="crd-td">SDN: 13,55, 33,6</td><td class="crd-td">City</td><td class="crd-td">12,1k</td><td class="crd-td">42,8k</td><td class="crd-td">123,2k</td><td class="crd-td">193k</td><td class="crd-td">193k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rabak</strong></td><td class="crd-td">SDN: 13,19, 32,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">26,7k</td><td class="crd-td">123,9k</td><td class="crd-td">186,4k</td><td class="crd-td">186,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Sururab Maghrabiyya</strong></td><td class="crd-td">SDN: 15,92, 32,53</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">168,8k</td><td class="crd-td">168,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Manāqil</strong></td><td class="crd-td">SDN: 14,24, 32,98</td><td class="crd-td">City</td><td class="crd-td">7,6k</td><td class="crd-td">36,1k</td><td class="crd-td">99,8k</td><td class="crd-td">168,5k</td><td class="crd-td">168,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>'Aṭbarah</strong></td><td class="crd-td">SDN: 17,73, 33,99</td><td class="crd-td">City</td><td class="crd-td">42k</td><td class="crd-td">72,8k</td><td class="crd-td">112k</td><td class="crd-td">153k</td><td class="crd-td">153k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tandaltī</strong></td><td class="crd-td">SDN: 13,02, 31,87</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">15,5k</td><td class="crd-td">31,3k</td><td class="crd-td">144,5k</td><td class="crd-td">144,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Marabiya' al-Sharif</strong></td><td class="crd-td">SDN: 15,52, 32,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">141,1k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Ad-Damazīn</strong></td><td class="crd-td">SDN: 11,79, 34,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">27,6k</td><td class="crd-td">136,8k</td><td class="crd-td">-</td><td class="crd-td">136,8k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Sawākin</strong></td><td class="crd-td">SDN: 19,09, 37,33</td><td class="crd-td">City</td><td class="crd-td">4,7k</td><td class="crd-td">18k</td><td class="crd-td">42,5k</td><td class="crd-td">135,5k</td><td class="crd-td">135,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zālingay</strong></td><td class="crd-td">SDN: 12,91, 23,47</td><td class="crd-td">City</td><td class="crd-td">6k</td><td class="crd-td">18k</td><td class="crd-td">35,1k</td><td class="crd-td">129,9k</td><td class="crd-td">135,5k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Umm Dawwanban</strong></td><td class="crd-td">SDN: 15,44, 32,82</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,4k</td><td class="crd-td">134,6k</td><td class="crd-td">134,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shandī</strong></td><td class="crd-td">SDN: 16,69, 33,44</td><td class="crd-td">City</td><td class="crd-td">13,4k</td><td class="crd-td">34,5k</td><td class="crd-td">63,7k</td><td class="crd-td">129k</td><td class="crd-td">129k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Damir</strong></td><td class="crd-td">SDN: 17,59, 33,97</td><td class="crd-td">City</td><td class="crd-td">7,9k</td><td class="crd-td">26,8k</td><td class="crd-td">73,7k</td><td class="crd-td">124,6k</td><td class="crd-td">124,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Um Rowaba</strong></td><td class="crd-td">SDN: 12,91, 31,21</td><td class="crd-td">City</td><td class="crd-td">10,3k</td><td class="crd-td">34,7k</td><td class="crd-td">56,8k</td><td class="crd-td">113k</td><td class="crd-td">113k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jadid al-Atsha</strong></td><td class="crd-td">SDN: 15,35, 32,76</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">104,8k</td><td class="crd-td">104,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ḥalfā al-Jadīdah</strong></td><td class="crd-td">SDN: 15,33, 35,6</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">38,1k</td><td class="crd-td">63,6k</td><td class="crd-td">101,8k</td><td class="crd-td">101,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kāduqlī</strong></td><td class="crd-td">SDN: 11, 29,72</td><td class="crd-td">City</td><td class="crd-td">8,3k</td><td class="crd-td">45,7k</td><td class="crd-td">67,1k</td><td class="crd-td">97,9k</td><td class="crd-td">97,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sinjah</strong></td><td class="crd-td">SDN: 13,15, 33,93</td><td class="crd-td">City</td><td class="crd-td">12,1k</td><td class="crd-td">28k</td><td class="crd-td">56,1k</td><td class="crd-td">97,3k</td><td class="crd-td">97,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Roseires</strong></td><td class="crd-td">SDN: 11,86, 34,4</td><td class="crd-td">City</td><td class="crd-td">6,1k</td><td class="crd-td">16,4k</td><td class="crd-td">58,7k</td><td class="crd-td">88,6k</td><td class="crd-td">88,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>al-Duwaym</strong></td><td class="crd-td">SDN: 14, 32,3</td><td class="crd-td">City</td><td class="crd-td">14,3k</td><td class="crd-td">38,6k</td><td class="crd-td">73,6k</td><td class="crd-td">85,8k</td><td class="crd-td">88,5k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>al-Nuhud</strong></td><td class="crd-td">SDN: 12,69, 28,42</td><td class="crd-td">City</td><td class="crd-td">18,5k</td><td class="crd-td">34,9k</td><td class="crd-td">66,1k</td><td class="crd-td">88k</td><td class="crd-td">88k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Forty leading regional centres and agglomerations in Sudan out of 364 assessed settlements (1960AD to 2025AD).</figcaption>
</figure>

## South Sudan: Leading Regional Centres

Table \ref{tab:gaz-ssd} catalogues the 30 largest settlements among South Sudan's 75 entries, capturing Juba's rapid post-2005 expansion (1,22M agglomeration in 2025AD) alongside Rumbek, Yambio, Yirol, Wau, Aweil, Maridi, Malakal and displacement sites such as Bentiu [@CBS2009SudanCensus; @Tesfay2024LotQuality].

<figure class="crd-table-figure" id="tab:gaz-ssd">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Juba (Agglomeration)</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">Metro</td><td class="crd-td">17k</td><td class="crd-td">86k</td><td class="crd-td">277,1k</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rumbek</strong></td><td class="crd-td">SSD: 6,76, 29,76</td><td class="crd-td">City</td><td class="crd-td">6,4k</td><td class="crd-td">19,4k</td><td class="crd-td">153,5k</td><td class="crd-td">644,2k</td><td class="crd-td">644,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">City</td><td class="crd-td">4,7k</td><td class="crd-td">24,9k</td><td class="crd-td">105,9k</td><td class="crd-td">364,3k</td><td class="crd-td">364,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yirol</strong></td><td class="crd-td">SSD: 6,54, 30,51</td><td class="crd-td">City</td><td class="crd-td">4,7k</td><td class="crd-td">7k</td><td class="crd-td">12,7k</td><td class="crd-td">231,2k</td><td class="crd-td">231,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Juba</strong></td><td class="crd-td">SSD: 4,83, 31,59</td><td class="crd-td">City</td><td class="crd-td">23,5k</td><td class="crd-td">84,4k</td><td class="crd-td">230,2k</td><td class="crd-td">-</td><td class="crd-td">230,2k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Wau</strong></td><td class="crd-td">SSD: 7,7, 27,96</td><td class="crd-td">City</td><td class="crd-td">13,6k</td><td class="crd-td">58k</td><td class="crd-td">118,3k</td><td class="crd-td">213,6k</td><td class="crd-td">213,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aweil</strong></td><td class="crd-td">SSD: 8,75, 27,36</td><td class="crd-td">City</td><td class="crd-td">5,9k</td><td class="crd-td">25,7k</td><td class="crd-td">59,2k</td><td class="crd-td">172,9k</td><td class="crd-td">172,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maridi</strong></td><td class="crd-td">SSD: 4,89, 29,5</td><td class="crd-td">City</td><td class="crd-td">4,2k</td><td class="crd-td">8,8k</td><td class="crd-td">55,6k</td><td class="crd-td">164,1k</td><td class="crd-td">164,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aluakaluak</strong></td><td class="crd-td">SSD: 6,45, 30,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">156,4k</td><td class="crd-td">156,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Malakal</strong></td><td class="crd-td">SSD: 9,53, 31,66</td><td class="crd-td">City</td><td class="crd-td">13,8k</td><td class="crd-td">33,7k</td><td class="crd-td">114,5k</td><td class="crd-td">153,1k</td><td class="crd-td">153,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bor</strong></td><td class="crd-td">SSD: 6,2, 31,57</td><td class="crd-td">City</td><td class="crd-td">4,9k</td><td class="crd-td">18,2k</td><td class="crd-td">25,2k</td><td class="crd-td">137,6k</td><td class="crd-td">137,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Renk</strong></td><td class="crd-td">SSD: 11,75, 32,81</td><td class="crd-td">City</td><td class="crd-td">4,1k</td><td class="crd-td">14,3k</td><td class="crd-td">69,1k</td><td class="crd-td">111,2k</td><td class="crd-td">111,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bentiu Protection of Civil Camp</strong></td><td class="crd-td">SSD: 9,33, 29,8</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">106,8k</td><td class="crd-td">106,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Angoot</strong></td><td class="crd-td">SSD: 9, 27,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">100,2k</td><td class="crd-td">100,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yei</strong></td><td class="crd-td">SSD: 4,09, 30,68</td><td class="crd-td">City</td><td class="crd-td">4,6k</td><td class="crd-td">23,4k</td><td class="crd-td">69,7k</td><td class="crd-td">72,9k</td><td class="crd-td">93,7k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Jalimo</strong></td><td class="crd-td">SSD: 3,83, 31,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,9k</td><td class="crd-td">85,9k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Kuacjok</strong></td><td class="crd-td">SSD: 8,29, 27,97</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">78,2k</td><td class="crd-td">78,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ameth-agok</strong></td><td class="crd-td">SSD: 6,56, 29,99</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">77,1k</td><td class="crd-td">77,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nimule</strong></td><td class="crd-td">SSD: 3,59, 32,07</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76,5k</td><td class="crd-td">76,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kashwal</strong></td><td class="crd-td">SSD: 7,01, 29,24</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76k</td><td class="crd-td">76k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yida Refugee Camp</strong></td><td class="crd-td">SSD: 10,11, 30,08</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">72k</td><td class="crd-td">72k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kongor</strong></td><td class="crd-td">SSD: 7,12, 31,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">59,5k</td><td class="crd-td">59,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kap</strong></td><td class="crd-td">SSD: 6,64, 30,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58,4k</td><td class="crd-td">58,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kurum</strong></td><td class="crd-td">SSD: 9, 28,37</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56,2k</td><td class="crd-td">56,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Torit</strong></td><td class="crd-td">SSD: 4,41, 32,58</td><td class="crd-td">City</td><td class="crd-td">5,2k</td><td class="crd-td">16,3k</td><td class="crd-td">35,7k</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Agok</strong></td><td class="crd-td">SSD: 9,35, 28,59</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,7k</td><td class="crd-td">52,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ayien</strong></td><td class="crd-td">SSD: 9,09, 28,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,5k</td><td class="crd-td">48,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ezo Centre</strong></td><td class="crd-td">SSD: 5,08, 27,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,5k</td><td class="crd-td">48,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tonj</strong></td><td class="crd-td">SSD: 7,28, 28,67</td><td class="crd-td">City</td><td class="crd-td">3,4k</td><td class="crd-td">9,6k</td><td class="crd-td">30,2k</td><td class="crd-td">48,1k</td><td class="crd-td">48,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aduel</strong></td><td class="crd-td">SSD: 6,57, 29,86</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,3k</td><td class="crd-td">47,3k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Thirty leading regional centres in South Sudan out of 75 assessed settlements (1960AD to 2025AD).</figcaption>
</figure>

## Somalia: Leading Regional Centres

Table \ref{tab:gaz-som} presents the 30 leading entries among Somalia's 59 assessed settlements, documenting IDP-driven urbanisation in Mogadishu (2,05M agglomeration; 1,65M city proper), Marka, Kismayo, Baidoa, Gaalkacyo, Beledweyne, Garoowe and Bosaso [@Bank2022SomaliaUrban; @Hussein2024TheImpact].

<figure class="crd-table-figure" id="tab:gaz-som">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mogadishu (Agglomeration)</strong></td><td class="crd-td">SOM: 2,12, 45,38</td><td class="crd-td">Metro</td><td class="crd-td">101,5k</td><td class="crd-td">521,6k</td><td class="crd-td">1,33M</td><td class="crd-td">2,05M</td><td class="crd-td">2,05M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">City</td><td class="crd-td">245,4k</td><td class="crd-td">843,7k</td><td class="crd-td">1,49M</td><td class="crd-td">-</td><td class="crd-td">1,65M (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">City</td><td class="crd-td">29,7k</td><td class="crd-td">23,9k</td><td class="crd-td">31k</td><td class="crd-td">33,2k</td><td class="crd-td">499k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Kismaayo</strong></td><td class="crd-td">SOM: -0,35, 42,55</td><td class="crd-td">City</td><td class="crd-td">11,3k</td><td class="crd-td">39,1k</td><td class="crd-td">84,6k</td><td class="crd-td">204,2k</td><td class="crd-td">358k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Baidoa</strong></td><td class="crd-td">SOM: 3,12, 43,66</td><td class="crd-td">City</td><td class="crd-td">10,6k</td><td class="crd-td">44,5k</td><td class="crd-td">128k</td><td class="crd-td">347,4k</td><td class="crd-td">347,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gaalkayo</strong></td><td class="crd-td">SOM: 6,78, 47,43</td><td class="crd-td">City</td><td class="crd-td">8,6k</td><td class="crd-td">22,1k</td><td class="crd-td">117,8k</td><td class="crd-td">183,2k</td><td class="crd-td">183,3k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Beledweyne</strong></td><td class="crd-td">SOM: 4,74, 45,2</td><td class="crd-td">City</td><td class="crd-td">9,9k</td><td class="crd-td">25,5k</td><td class="crd-td">117,8k</td><td class="crd-td">141,9k</td><td class="crd-td">176,8k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Garoowe</strong></td><td class="crd-td">SOM: 8,4, 48,48</td><td class="crd-td">City</td><td class="crd-td">5,1k</td><td class="crd-td">14,1k</td><td class="crd-td">47,3k</td><td class="crd-td">138k</td><td class="crd-td">138k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bosaso</strong></td><td class="crd-td">SOM: 11,26, 49,19</td><td class="crd-td">City</td><td class="crd-td">8,3k</td><td class="crd-td">17,9k</td><td class="crd-td">78,4k</td><td class="crd-td">125,8k</td><td class="crd-td">125,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Siigadhere</strong></td><td class="crd-td">SOM: 6,25, 46,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">113,8k</td><td class="crd-td">113,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dhoobaale</strong></td><td class="crd-td">SOM: 0,41, 41,01</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93,5k</td><td class="crd-td">93,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dolow (north)</strong></td><td class="crd-td">SOM: 4,16, 42,09</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">88,9k</td><td class="crd-td">88,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guri'eel</strong></td><td class="crd-td">SOM: 5,31, 45,88</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">81,8k</td><td class="crd-td">81,8k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Belet Xawo/Mandera [SOM]</strong></td><td class="crd-td">SOM: 3,93, 41,88</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">72,5k</td><td class="crd-td">72,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dinsoor</strong></td><td class="crd-td">SOM: 2,41, 42,97</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">13,9k</td><td class="crd-td">66,9k</td><td class="crd-td">66,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Buur Hakaba</strong></td><td class="crd-td">SOM: 2,8, 44,08</td><td class="crd-td">City</td><td class="crd-td">5,6k</td><td class="crd-td">8,1k</td><td class="crd-td">11,6k</td><td class="crd-td">65,9k</td><td class="crd-td">65,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jowhar</strong></td><td class="crd-td">SOM: 2,78, 45,49</td><td class="crd-td">City</td><td class="crd-td">13,8k</td><td class="crd-td">23k</td><td class="crd-td">35,8k</td><td class="crd-td">63,9k</td><td class="crd-td">63,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>'Adaado</strong></td><td class="crd-td">SOM: 6,14, 46,63</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50,2k</td><td class="crd-td">60,3k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Qardho</strong></td><td class="crd-td">SOM: 9,51, 49,09</td><td class="crd-td">City</td><td class="crd-td">4,3k</td><td class="crd-td">9,1k</td><td class="crd-td">22,7k</td><td class="crd-td">57,9k</td><td class="crd-td">57,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wanlaweyn</strong></td><td class="crd-td">SOM: 2,62, 44,89</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">57,4k</td><td class="crd-td">57,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Luuq</strong></td><td class="crd-td">SOM: 3,8, 42,54</td><td class="crd-td">City</td><td class="crd-td">6,2k</td><td class="crd-td">8,8k</td><td class="crd-td">11,6k</td><td class="crd-td">52,2k</td><td class="crd-td">52,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Baar Dheere</strong></td><td class="crd-td">SOM: 2,34, 42,29</td><td class="crd-td">City</td><td class="crd-td">7,5k</td><td class="crd-td">11,9k</td><td class="crd-td">34,3k</td><td class="crd-td">51,6k</td><td class="crd-td">51,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Afgoye</strong></td><td class="crd-td">SOM: 2,14, 45,12</td><td class="crd-td">City</td><td class="crd-td">14,9k</td><td class="crd-td">16k</td><td class="crd-td">37,8k</td><td class="crd-td">51k</td><td class="crd-td">51k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ballanbale</strong></td><td class="crd-td">SOM: 5,77, 45,76</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,7k</td><td class="crd-td">48,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dusa Mareb</strong></td><td class="crd-td">SOM: 5,54, 46,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44k</td><td class="crd-td">44k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Berdale</strong></td><td class="crd-td">SOM: 3,21, 43,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,9k</td><td class="crd-td">42,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Uffurow</strong></td><td class="crd-td">SOM: 2,76, 42,89</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35,1k</td><td class="crd-td">35,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Badhan</strong></td><td class="crd-td">SOM: 10,72, 48,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33,8k</td><td class="crd-td">33,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Goldogob</strong></td><td class="crd-td">SOM: 7,03, 47,02</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,3k</td><td class="crd-td">31,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Qoryoley</strong></td><td class="crd-td">SOM: 1,79, 44,53</td><td class="crd-td">City</td><td class="crd-td">15k</td><td class="crd-td">11,4k</td><td class="crd-td">14,5k</td><td class="crd-td">31,2k</td><td class="crd-td">31,2k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Thirty leading regional centres in the Federal Republic of Somalia out of 59 assessed settlements (1960AD to 2025AD).</figcaption>
</figure>

## Somaliland: Assessed Regional Centres

Table \ref{tab:gaz-sol} lists all 12 assessed settlements in de facto Somaliland, led by the Hargeisa agglomeration (1,36M), Berbera (374k), Burao (235k), Borama (163,6k), Las Anod (75,6k) and Gebilay (69,9k) [@Bank2022SomaliaUrban].

<figure class="crd-table-figure" id="tab:gaz-sol">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hargeisa (Agglomeration)</strong></td><td class="crd-td">SOL: 9,56, 44,05</td><td class="crd-td">Metro</td><td class="crd-td">38,4k</td><td class="crd-td">107k</td><td class="crd-td">475,3k</td><td class="crd-td">1,36M</td><td class="crd-td">1,36M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hargeysa</strong></td><td class="crd-td">SOL: 9,56, 44,05</td><td class="crd-td">City</td><td class="crd-td">94,1k</td><td class="crd-td">369,7k</td><td class="crd-td">669,1k</td><td class="crd-td">-</td><td class="crd-td">741k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Barbara</strong></td><td class="crd-td">SOL: 10,43, 45,01</td><td class="crd-td">City</td><td class="crd-td">11,5k</td><td class="crd-td">15,1k</td><td class="crd-td">31,9k</td><td class="crd-td">47,8k</td><td class="crd-td">374k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Burao</strong></td><td class="crd-td">SOL: 9,52, 45,53</td><td class="crd-td">City</td><td class="crd-td">11,4k</td><td class="crd-td">55,1k</td><td class="crd-td">172,9k</td><td class="crd-td">234,9k</td><td class="crd-td">235k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Borama</strong></td><td class="crd-td">SOL: 9,94, 43,19</td><td class="crd-td">City</td><td class="crd-td">6,2k</td><td class="crd-td">14,2k</td><td class="crd-td">53,3k</td><td class="crd-td">163,6k</td><td class="crd-td">163,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Las Anod</strong></td><td class="crd-td">SOL: 8,48, 47,36</td><td class="crd-td">City</td><td class="crd-td">4,3k</td><td class="crd-td">10,6k</td><td class="crd-td">27,4k</td><td class="crd-td">75,6k</td><td class="crd-td">75,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gebilay</strong></td><td class="crd-td">SOL: 9,7, 43,62</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,5k</td><td class="crd-td">69,9k</td><td class="crd-td">69,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tog Wajaale</strong></td><td class="crd-td">SOL: 9,61, 43,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k</td><td class="crd-td">53k</td><td class="crd-td">53k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>'Erigavo</strong></td><td class="crd-td">SOL: 10,62, 47,37</td><td class="crd-td">City</td><td class="crd-td">4,6k</td><td class="crd-td">10,6k</td><td class="crd-td">20,8k</td><td class="crd-td">39,5k</td><td class="crd-td">39,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Buuhoodle</strong></td><td class="crd-td">SOL: 8,24, 46,33</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,3k</td><td class="crd-td">37,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aynabo and Refugee Camp</strong></td><td class="crd-td">SOL: 8,95, 46,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">17,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kalabaydh</strong></td><td class="crd-td">SOL: 8,24, 47,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> All twelve assessed regional centres and agglomerations in Somaliland (1960AD to 2025AD).</figcaption>
</figure>

## Eritrea: Assessed Regional Centres

Table \ref{tab:gaz-eri} compiles all 34 assessed Eritrean localities, anchored by Asmara (896k city estimate in 2018AD; 542,7k agglomeration in 2025AD), Teseney (177k), Keren (88,5k), Barentu (84,3k), Dek'emhare (82,6k) and Massawa [@Woldemicael2008RecentFertility].

<figure class="crd-table-figure" id="tab:gaz-eri">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Āsmera</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">City</td><td class="crd-td">159,1k</td><td class="crd-td">270,5k</td><td class="crd-td">650,6k</td><td class="crd-td">-</td><td class="crd-td">896k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Asmara (Agglomeration)</strong></td><td class="crd-td">ERI: 15,33, 38,93</td><td class="crd-td">Metro</td><td class="crd-td">123,5k</td><td class="crd-td">308,7k</td><td class="crd-td">437,4k</td><td class="crd-td">542,7k</td><td class="crd-td">542,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Teseney</strong></td><td class="crd-td">ERI: 15,1, 36,66</td><td class="crd-td">City</td><td class="crd-td">4,6k</td><td class="crd-td">2,6k</td><td class="crd-td">49,8k</td><td class="crd-td">177k</td><td class="crd-td">177k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Keren</strong></td><td class="crd-td">ERI: 15,78, 38,45</td><td class="crd-td">City</td><td class="crd-td">15k</td><td class="crd-td">26,4k</td><td class="crd-td">64,5k</td><td class="crd-td">88,5k</td><td class="crd-td">88,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Barentu</strong></td><td class="crd-td">ERI: 15,11, 37,59</td><td class="crd-td">City</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">33,5k</td><td class="crd-td">84,3k</td><td class="crd-td">84,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dek'emhāre</strong></td><td class="crd-td">ERI: 15,07, 39,05</td><td class="crd-td">City</td><td class="crd-td">9,8k</td><td class="crd-td">7,4k</td><td class="crd-td">36,9k</td><td class="crd-td">82,6k</td><td class="crd-td">82,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Af Abeb</strong></td><td class="crd-td">ERI: 16,19, 38,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42,1k</td><td class="crd-td">68k</td><td class="crd-td">68k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Goluj</strong></td><td class="crd-td">ERI: 14,75, 36,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,4k</td><td class="crd-td">56,3k</td><td class="crd-td">56,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Āk'ordat</strong></td><td class="crd-td">ERI: 15,54, 37,88</td><td class="crd-td">City</td><td class="crd-td">10,3k</td><td class="crd-td">7,1k</td><td class="crd-td">24,8k</td><td class="crd-td">49,3k</td><td class="crd-td">49,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Āseb</strong></td><td class="crd-td">ERI: 13,01, 42,74</td><td class="crd-td">City</td><td class="crd-td">10,4k</td><td class="crd-td">29,8k</td><td class="crd-td">35,9k</td><td class="crd-td">41,5k</td><td class="crd-td">44,2k (1997AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Ugrī</strong></td><td class="crd-td">ERI: 14,89, 38,81</td><td class="crd-td">City</td><td class="crd-td">8,9k</td><td class="crd-td">12,7k</td><td class="crd-td">22,3k</td><td class="crd-td">44,1k</td><td class="crd-td">44,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mits'iwa</strong></td><td class="crd-td">ERI: 15,62, 39,44</td><td class="crd-td">City</td><td class="crd-td">15,2k</td><td class="crd-td">16,4k</td><td class="crd-td">27,6k</td><td class="crd-td">40,7k</td><td class="crd-td">40,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Hegaz</strong></td><td class="crd-td">ERI: 15,71, 38,26</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">29,9k</td><td class="crd-td">29,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gīnda</strong></td><td class="crd-td">ERI: 15,44, 39,1</td><td class="crd-td">City</td><td class="crd-td">5,6k</td><td class="crd-td">7,6k</td><td class="crd-td">14,3k</td><td class="crd-td">28,6k</td><td class="crd-td">28,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Om Hājer</strong></td><td class="crd-td">ERI: 14,33, 36,65</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">24,1k</td><td class="crd-td">24,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ali Ghdir</strong></td><td class="crd-td">ERI: 15,1, 36,58</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,3k</td><td class="crd-td">23,3k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Haykota</strong></td><td class="crd-td">ERI: 15,18, 37,08</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">20,1k</td><td class="crd-td">20,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adhi Bdo</strong></td><td class="crd-td">ERI: 14,96, 36,86</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,3k</td><td class="crd-td">19,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Kwala</strong></td><td class="crd-td">ERI: 14,64, 38,83</td><td class="crd-td">City</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td><td class="crd-td">9,3k</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Himbirti</strong></td><td class="crd-td">ERI: 15,25, 38,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">17,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gergef</strong></td><td class="crd-td">ERI: 14,62, 36,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">17,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī Tekelezan</strong></td><td class="crd-td">ERI: 15,57, 38,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k</td><td class="crd-td">16,8k</td><td class="crd-td">16,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Segeneytī</strong></td><td class="crd-td">ERI: 15,05, 39,19</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">16,8k</td><td class="crd-td">16,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ādī K'eyih</strong></td><td class="crd-td">ERI: 14,85, 39,37</td><td class="crd-td">City</td><td class="crd-td">6,1k</td><td class="crd-td">8,6k</td><td class="crd-td">13,7k</td><td class="crd-td">16k</td><td class="crd-td">16k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sen'afē</strong></td><td class="crd-td">ERI: 14,7, 39,42</td><td class="crd-td">City</td><td class="crd-td">3,5k</td><td class="crd-td">4k</td><td class="crd-td">12,1k</td><td class="crd-td">15,9k</td><td class="crd-td">15,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ona Gabie</strong></td><td class="crd-td">ERI: 14,65, 38,87</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,7k</td><td class="crd-td">15,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Debarwa</strong></td><td class="crd-td">ERI: 15,09, 38,84</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">14,9k</td><td class="crd-td">14,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nak'fa</strong></td><td class="crd-td">ERI: 16,67, 38,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">14k</td><td class="crd-td">14k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jurna</strong></td><td class="crd-td">ERI: 14,95, 37,91</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,9k</td><td class="crd-td">13,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gerset</strong></td><td class="crd-td">ERI: 14,9, 36,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">11,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adi Key</strong></td><td class="crd-td">ERI: 15,07, 36,54</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adi Gwaidad</strong></td><td class="crd-td">ERI: 15,26, 38,9</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">10,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Deki Shehay</strong></td><td class="crd-td">ERI: 15,41, 38,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">10,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Āreza</strong></td><td class="crd-td">ERI: 14,93, 38,57</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1997AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> All 34 assessed settlements across Eritrea from 1960AD to 2025AD.</figcaption>
</figure>

## Djibouti: Assessed Regional Centres

Table \ref{tab:gaz-dji} documents all 26 Djiboutian entries, illustrating extreme port-state primacy in Djibouti City (767,3k in 2024AD; 614,8k agglomeration) above Ali-Sabieh, Dikhil, Obock, Tadjourah and Arta [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:gaz-dji">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Djibouti</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">City</td><td class="crd-td">72,6k</td><td class="crd-td">261,6k</td><td class="crd-td">467,1k</td><td class="crd-td">-</td><td class="crd-td">767,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Djibouti (Agglomeration)</strong></td><td class="crd-td">DJI: 11,57, 43,1</td><td class="crd-td">Metro</td><td class="crd-td">37,4k</td><td class="crd-td">210,8k</td><td class="crd-td">468,4k</td><td class="crd-td">614,8k</td><td class="crd-td">614,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ali-Sabieh</strong></td><td class="crd-td">DJI: 11,15, 42,71</td><td class="crd-td">City</td><td class="crd-td">5,6k</td><td class="crd-td">20,8k</td><td class="crd-td">37,3k</td><td class="crd-td">55,5k</td><td class="crd-td">55,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dikhil</strong></td><td class="crd-td">DJI: 11,11, 42,37</td><td class="crd-td">City</td><td class="crd-td">4k</td><td class="crd-td">13,8k</td><td class="crd-td">24,5k</td><td class="crd-td">40,2k</td><td class="crd-td">40,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Obock</strong></td><td class="crd-td">DJI: 11,97, 43,29</td><td class="crd-td">City</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k</td><td class="crd-td">11,5k</td><td class="crd-td">23,3k</td><td class="crd-td">30k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Tadjourah</strong></td><td class="crd-td">DJI: 11,79, 42,88</td><td class="crd-td">City</td><td class="crd-td">3,6k</td><td class="crd-td">8,8k</td><td class="crd-td">14,6k</td><td class="crd-td">26,6k</td><td class="crd-td">26,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arta</strong></td><td class="crd-td">DJI: 11,52, 42,85</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,3k</td><td class="crd-td">19,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ali Adde</strong></td><td class="crd-td">DJI: 11,13, 42,89</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">15,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ali-Adeh</strong></td><td class="crd-td">DJI: 11,15, 42,85</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>As-Eyla</strong></td><td class="crd-td">DJI: 11,01, 42,11</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Damerjog</strong></td><td class="crd-td">DJI: 11,48, 43,18</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Mouloud</strong></td><td class="crd-td">DJI: 11,17, 42,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Wea</strong></td><td class="crd-td">DJI: 11,5, 42,86</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Holl-Holl</strong></td><td class="crd-td">DJI: 11,31, 42,93</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Nagad</strong></td><td class="crd-td">DJI: 11,51, 43,13</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Yoboki</strong></td><td class="crd-td">DJI: 11,51, 42,11</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Adgueno</strong></td><td class="crd-td">DJI: 12,49, 42,46</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Randa</strong></td><td class="crd-td">DJI: 11,85, 42,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Omar Jagaa</strong></td><td class="crd-td">DJI: 11,38, 42,76</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Sankal</strong></td><td class="crd-td">DJI: 11,02, 42,15</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Atar</strong></td><td class="crd-td">DJI: 11,45, 43,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Kouta Bouya</strong></td><td class="crd-td">DJI: 11,02, 41,97</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Dorra</strong></td><td class="crd-td">DJI: 12,15, 42,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Sagallou</strong></td><td class="crd-td">DJI: 11,67, 42,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">993 (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Gorabous</strong></td><td class="crd-td">DJI: 11,3, 42,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">914 (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Adayllou</strong></td><td class="crd-td">DJI: 11,95, 42,91</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">791 (2024AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> All 26 assessed localities across Djibouti from 1960AD to 2025AD.</figcaption>
</figure>

## Cross-Border Frontier Towns and Refugee Camps

Table \ref{tab:gaz-border} lists the 25 largest localities among the 60 peripheral border settlements falling inside the chapter bounding corridor across Uganda, Chad, Kenya, Democratic Republic of the Congo and Central African Republic, capturing major refugee-hosting settlements (Yumbe, Bredjing, Farchana, Touloum) and cross-border commercial towns (Mandera, Ariwara, Moyale) [@Bank2015EasternAfrica].

<figure class="crd-table-figure" id="tab:gaz-border">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1983AD</th><th class="crd-th">2008AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yumbe</strong></td><td class="crd-td">UGA: 3,46, 31,24</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25k</td><td class="crd-td">333,3k</td><td class="crd-td">333,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mandera</strong></td><td class="crd-td">KEN: 3,94, 41,84</td><td class="crd-td">City</td><td class="crd-td">1,2k</td><td class="crd-td">16,8k</td><td class="crd-td">55,6k</td><td class="crd-td">131,3k</td><td class="crd-td">131,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koboko</strong></td><td class="crd-td">UGA: 3,41, 30,96</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">39,2k</td><td class="crd-td">118,9k</td><td class="crd-td">118,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mandera (Agglomeration)</strong></td><td class="crd-td">KEN: 3,94, 41,84</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">114,7k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Ariwara</strong></td><td class="crd-td">COD: 3,12, 30,7</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">104,6k</td><td class="crd-td">104,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moyale</strong></td><td class="crd-td">KEN: 3,53, 39,06</td><td class="crd-td">City</td><td class="crd-td">2,8k</td><td class="crd-td">4k</td><td class="crd-td">27,8k</td><td class="crd-td">79,7k</td><td class="crd-td">79,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maracha</strong></td><td class="crd-td">UGA: 3,26, 30,98</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Aba</strong></td><td class="crd-td">COD: 3,86, 30,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,5k</td><td class="crd-td">73k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>El Wak</strong></td><td class="crd-td">KEN: 2,81, 40,93</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">71,1k</td><td class="crd-td">71,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Adjumani</strong></td><td class="crd-td">UGA: 3,37, 31,78</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,6k</td><td class="crd-td">60,2k</td><td class="crd-td">60,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rhamu</strong></td><td class="crd-td">KEN: 3,93, 41,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,2k</td><td class="crd-td">57k</td><td class="crd-td">57k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bredjing camp</strong></td><td class="crd-td">TCD: 13,48, 21,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Farchana</strong></td><td class="crd-td">TCD: 13,59, 21,83</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,7k</td><td class="crd-td">52,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Andata</strong></td><td class="crd-td">COD: 3,81, 29,93</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50,5k</td><td class="crd-td">50,5k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Lamila</strong></td><td class="crd-td">UGA: 3,18, 30,93</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,9k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Faradje</strong></td><td class="crd-td">COD: 3,71, 29,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,1k</td><td class="crd-td">18,9k</td><td class="crd-td">47k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Touloum camp</strong></td><td class="crd-td">TCD: 15, 22,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">43k</td><td class="crd-td">43k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ingbokolo/Bukalwa/Adi</strong></td><td class="crd-td">COD: 3,39, 30,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,6k</td><td class="crd-td">41,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Amdjarass</strong></td><td class="crd-td">TCD: 16,07, 22,84</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,6k</td><td class="crd-td">41,5k</td><td class="crd-td">41,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Oure Cassoni camp</strong></td><td class="crd-td">TCD: 15,71, 23,05</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moyo</strong></td><td class="crd-td">UGA: 3,66, 31,72</td><td class="crd-td">City</td><td class="crd-td">3,7k</td><td class="crd-td">7,9k</td><td class="crd-td">16,5k</td><td class="crd-td">36,8k</td><td class="crd-td">36,8k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Palabek</strong></td><td class="crd-td">UGA: 3,44, 32,58</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,5k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya/Oraba [UGA]</strong></td><td class="crd-td">UGA: 3,52, 30,88</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,7k</td><td class="crd-td">34k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Bura</strong></td><td class="crd-td">UGA: 3,25, 31,12</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,7k</td><td class="crd-td">29,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Lobe</strong></td><td class="crd-td">UGA: 3,58, 31,15</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,4k (2024AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Twenty-five leading cross-border towns and refugee settlements across Uganda, Chad, Kenya, DR Congo and Central African Republic.</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, interpolation across 1960AD, 1983AD, 2008AD and 2025AD operates strictly between each locality's earliest and latest observed records; entries first recorded in recent censuses or satellite sweeps display a hyphen prior to foundation or initial enumeration. Second, morphological agglomerations in southern Ethiopia merge adjacent towns and dense rural homesteads around Sodo and Hawassa, inflating post-2015 Africapolis values relative to CSA municipal boundaries [@OECD2024Africapolis; @CSA2010EthiopiaCensus]. Third, ongoing wars in Sudan since April 2023 and recent displacement across Tigray and South Sudan render current urban headcounts provisional [@Abadi2018TheImpact; @Tesfay2024LotQuality].

# Conclusion

Together, the 1.221 assessed settlements trace seven decades of urban expansion across the Horn and Nile valley, linking colonial-era administrative outposts to contemporary multi-million agglomerations, regional capitals and humanitarian displacement centres.

# Appendix

## Interpolated Active Settlement Totals by Benchmark

Table \ref{tab:gazetteer-appendix} sums active settlement counts and combined interpolated populations across the six primary regional benchmarks from 1956AD to 2025AD, separating city-proper entries from metropolitan agglomerations to avoid spatial overlap.

<figure class="crd-table-figure" id="tab:gazetteer-appendix">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Scope Category</th><th class="crd-th">1956AD</th><th class="crd-th">1972AD</th><th class="crd-th">1983AD</th><th class="crd-th">1993AD</th><th class="crd-th">2009AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>City-Proper Localities (1.211)</strong></td><td class="crd-td">2,5M (159)</td><td class="crd-td">6,07M (172)</td><td class="crd-td">9,51M (214)</td><td class="crd-td">16,12M (287)</td><td class="crd-td">24,13M (472)</td><td class="crd-td">56,29M (1.094)</td></tr>
<tr><td class="crd-td"><strong>Metropolitan Agglomerations (10)</strong></td><td class="crd-td">1,05M (7)</td><td class="crd-td">2,39M (7)</td><td class="crd-td">4,16M (7)</td><td class="crd-td">6,3M (7)</td><td class="crd-td">10,55M (7)</td><td class="crd-td">20,32M (8)</td></tr>
<tr><td class="crd-td"><strong>All Ledger Entries (1.221)</strong></td><td class="crd-td">3,55M (166)</td><td class="crd-td">8,46M (179)</td><td class="crd-td">13,67M (221)</td><td class="crd-td">22,42M (294)</td><td class="crd-td">34,68M (479)</td><td class="crd-td">76,61M (1.102)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Combined interpolated population and active locality counts (in parentheses) by spatial scope from 1956AD to 2025AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed years; pre-observation and post-observation benchmarks are marked with a hyphen (-). City-proper and metropolitan agglomeration records are listed separately in all gazetteer tables and summed independently in Table \ref{tab:gazetteer-appendix}.
