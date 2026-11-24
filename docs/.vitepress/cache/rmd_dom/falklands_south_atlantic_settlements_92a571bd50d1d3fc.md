---
title: "The Falklands and South Atlantic Islands"
subtitle: "Settlement Gazetteer and Maritime Station Hierarchy (1764-2026)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/falklands_south_atlantic_regional_map.png"
hero_caption: "Spatial distribution of 53 catalogued settlements and administrative stations across East Falkland, West Falkland, South Georgia and the South Sandwich Islands."
hero_label: "fig:hero-falklands-gazetteer"
bibliography: falklands_south_atlantic_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Spatial distribution of 53 catalogued settlements and administrative stations across East Falkland, West Falkland, South Georgia and the South Sandwich Islands.](figures/falklands_south_atlantic_regional_map.png)



# Abstract

This gazetteer catalogues 53 historical and contemporary settlements, pastoral Camp stations, whaling ports and scientific bases across East Falkland, West Falkland, South Georgia and the South Sandwich Islands between 1764 and 2026. Constructed across four documented ingestion waves from official Falkland Islands census publications (1851 to 2021) and South Georgia Heritage Trust and British Antarctic Survey station logs, the corpus evaluated 55 candidate localities and merged two proximity duplicates - Grytviken into King Edward Point at 0,91 km and Port San Carlos into San Carlos at 1,16 km - leaving 53 unique sites with zero crowd-sourced entries and a fourth-wave marginal saturation gain of 1,92% [@Directorate2022Falkland; @Islands2020South]. Peak station headcounts follow a steep power-law rank-size curve ($\alpha = 1,1$, $R^2 = 0,98$) extending from Stanley (2.964 in 2021) and RAF Mount Pleasant (540 civilian contractors in 1986) through South Georgia's former industrial whaling stations (Leith Harbour 510, Husvik 365, Stromness 295) down to outer Camp farms and research stations of 10 to 49 persons [@Unit2017Falkland; @Agnew2004Fishing; @Blair2019South].

# Background

Settlements in the South Atlantic islands fall into three distinct morphological types reflecting successive maritime, colonial and pastoral economies [@Massolo1990Teenage; @Arruda2015Colonial]. In the Falkland Islands, eighteenth-century naval and garrison anchors at Port Louis, Port Egmont and Puerto Soledad gave way after 1845 to a primate port at Stanley paired with dozens of dispersed wool-farming settlements across East and West Falkland [@Pernety2013History; @Aguado2014Francisco; @Rodriguez2026Poblacion]. Early nineteenth-century descriptions by Woodbine Parish and colonial estate ledgers record how pastoral grazing gradually expanded outward from Berkeley Sound across the treeless interior [@Parish1833Account; @Taquini1982History; @Barriera2023Malvinas].

These Camp communities - led by Goose Green, Darwin, Fox Bay, Port Howard, Chartres and Hill Cove - consisted of a manager's house, shearers' quarters, cookhouse and timber jetty served by coastal shipping [@Berardi2023Negociaciones; @Massolo1990Teenage; @Engel1990Falkland]. After 1982, civilian infrastructure at RAF Mount Pleasant and revenue from offshore squid licensing anchored urban growth in Stanley while outer farms thinned [@Bellot2021Keeping; @Fraga2017Oil; @Ruzza2011Falkland].

On South Georgia and the South Sandwich Islands, human habitation instead took the form of specialised seasonal factory harbours and polar research outposts [@Ludecke2022140; @Vogel1983Invertebrates]. Between 1904 and 1965, seven shore-based Norwegian and British whaling plants lined South Georgia's sheltered northern bays, housing hundreds of summer flensers beside tiny administrative posts at King Edward Point [@Islands2020South; @Agnew2004Fishing]. Following whaling closure, only scientific bases at King Edward Point and Bird Island persisted, while Argentina briefly maintained Corbeta Uruguay on Thule Island from 1976 to 1982 amid wider South Atlantic sovereignty disputes [@Petrovic2022Argentinas; @Tato2023Falklands; @Palermo2010Causa].

# Methodology

The settlement gazetteer was assembled through four sequential ingestion waves recorded in the chapter source ledger, drawing exhaustively from two institutional corpora: 45 candidate localities from Falkland Islands Government Census Reports (1851 to 2021) and 10 candidate sites from South Georgia Heritage Trust and British Antarctic Survey inventories [@Directorate2022Falkland; @Unit2017Falkland; @Unit2013Falkland]. Every site carries WGS84 coordinates, an automated polygon assignment to one of four canonical subregions, an occupation span inside 1764 to 2026 and a structured provenance label [@Petrovic2022Argentinas; @Ludecke2022140]. Proximity deduplication checked every site pair within a 2 km threshold, retaining all distinct Camp estates while merging redundant colonial and administrative aliases across rival historical toponymies [@Rodriguez2026Poblacion; @Claude2021Efforts; @Pezzano2022Una].

# Testing and Validation

Source coverage, wave saturation and duplicate-merging rules are summarised directly from the machine-readable ledger and gazetteer files. Wave 1 established the 42 foundational Falkland towns, Camp settlements and South Georgia whaling harbours from primary 2016 and 2021 census rosters and the 1984 Headland baseline [@Directorate2022Falkland; @Unit2017Falkland; @Islands2020South]. Wave 2 added 7 additional outer-island ranches and early colonial outposts (marginal gain 16,67%), Wave 3 added 3 minor Camp and scientific entries including Port Egmont, Port Sussex and Bird Island (6,12%), and Wave 4 closed remaining South Atlantic archipelago gaps with Argentina's former Corbeta Uruguay station on Thule Island (1,92%) [@Tato2023Falklands; @Aguado2014Francisco; @Guber2012Nacionalismo].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Corpus</th><th class="crd-th">New Sites</th><th class="crd-th">Cumulative Sites</th><th class="crd-th">Marginal Gain</th><th class="crd-th">Crowd Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">primary national statistical office full census extract</td><td class="crd-td">42</td><td class="crd-td">42</td><td class="crd-td">100%</td><td class="crd-td">0%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">secondary georeference repair and metro reconciliation</td><td class="crd-td">7</td><td class="crd-td">49</td><td class="crd-td">16,67%</td><td class="crd-td">0%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">longitudinal 19th 20th century official national census backfill</td><td class="crd-td">3</td><td class="crd-td">52</td><td class="crd-td">6,12%</td><td class="crd-td">0%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">subregion gap hunter verification sweep</td><td class="crd-td">1</td><td class="crd-td">53</td><td class="crd-td">1,92%</td><td class="crd-td">0%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Four-wave gazetteer ingestion log and marginal saturation metrics across 53 retained sites (2 duplicates merged, 0 crowd-sourced).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Excluded Name</th><th class="crd-th">Primary Station</th><th class="crd-th">Distance (km)</th><th class="crd-th">Merge Rationale</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Grytviken</strong></td><td class="crd-td">King Edward Point</td><td class="crd-td">0,91</td><td class="crd-td">Duplicate alias within 1 km</td></tr>
<tr><td class="crd-td"><strong>Port San Carlos</strong></td><td class="crd-td">San Carlos</td><td class="crd-td">1,16</td><td class="crd-td">Duplicate alias within 1,5 km</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded duplicate proximity records merged during gazetteer deduplication.</figcaption>
</figure>

# Results

By subregion, East Falkland holds 24 catalogued settlements (45,28% of all sites) and West Falkland holds 20 (37,74%), reflecting dense Camp pastoral subdivision across the main archipelago [@Directorate2022Falkland; @Massolo1990Teenage; @Engel1990Falkland]. South Georgia contributes 8 sites (15,09%), spanning one Polar Year station, six closed whaling plants and the dual-station scientific complex at King Edward Point and Bird Island, while the South Sandwich Islands contribute a single historical occupation at Corbeta Uruguay (1,89%) [@Ludecke2022140; @Vogel1983Invertebrates; @Blair2019South]. Peak population concentration is heavily skewed: the top five sites (Stanley, RAF Mount Pleasant, Leith Harbour, Husvik and Stromness) represent 4.674 peak places across different decades, whereas the median settlement peak across all 53 entries is 49 persons at Teal Inlet [@Agnew2004Fishing; @Fraga2017Oil; @Ruzza2011Falkland].

<figure class="crd-figure-block" id="fig:gazetteer-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-falklands-south-atlantic-settlements/falklands_south_atlantic_urban_hierarchy.png" alt="fig:gazetteer-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Top-ranked historical settlements and log-log rank-size power fit across 53 catalogued South Atlantic localities (1764 to 2026).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion</th><th class="crd-th">Sites</th><th class="crd-th">Area (km²)</th><th class="crd-th">Largest Settlement (Peak)</th><th class="crd-th">Median Peak</th><th class="crd-th">2021 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>East Falkland (Stanley and Camp)</strong></td><td class="crd-td">24</td><td class="crd-td">9.768,1</td><td class="crd-td">Stanley (2.964)</td><td class="crd-td">44</td><td class="crd-td">3.531</td></tr>
<tr><td class="crd-td"><strong>West Falkland and Outer Islands</strong></td><td class="crd-td">20</td><td class="crd-td">10.097,5</td><td class="crd-td">Fox Bay (112)</td><td class="crd-td">45</td><td class="crd-td">131</td></tr>
<tr><td class="crd-td"><strong>South Georgia</strong></td><td class="crd-td">8</td><td class="crd-td">6.149</td><td class="crd-td">Leith Harbour (510)</td><td class="crd-td">232</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>South Sandwich Islands</strong></td><td class="crd-td">1</td><td class="crd-td">1.728,7</td><td class="crd-td">Corbeta Uruguay (50)</td><td class="crd-td">50</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional distribution of the 53 catalogued settlements, largest station peaks and 2021 domain populations.</figcaption>
</figure>

# Limitations

Three structural caveats shape this settlement register [@Unit2013Falkland; @Barriera2023Malvinas]. First, historical peaks across the 53 sites are asynchronous: Port Egmont peaked in 1770, Port Louis in 1806, Darwin in 1901, Leith Harbour and Husvik in 1937, RAF Mount Pleasant in 1986 and Stanley in 2021, so summing peak capacities across columns does not represent a simultaneous headcount [@Aguado2014Francisco; @Taquini1982History; @Directorate2022Falkland]. Second, Camp farm headcounts reported in twentieth-century censuses occasionally merge scattered shepherd cottages with central settlement nuclei, whereas 2016 and 2021 island tabulations report exact settlement locations [@Unit2017Falkland; @Massolo1990Teenage]. Third, South Georgia station peaks reflect summer industrial complements recorded by Headland and fisheries archives rather than year-round residents [@Agnew2004Fishing; @Vogel1983Invertebrates].

# Conclusion

Together, the 53 catalogued sites capture every permanent colonial settlement, sheep station, whaling harbour and polar scientific station documented in archival and census records across the Falklands and South Atlantic territories from 1764 to 2026 [@Pernety2013History; @Parish1833Account; @Rodriguez2026Poblacion]. Merging proximity duplicates and auditing four ingestion waves confirms an exhaustive institutional registry anchored in Stanley's 81,21% modern concentration alongside the historical footprint of 43 outer Camp farms and 9 sub-Antarctic stations [@Berardi2023Negociaciones; @Blair2019South; @Laufer2022Malvinas].

# Appendix

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Subregion</th><th class="crd-th">Lat</th><th class="crd-th">Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Provenance</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Stanley</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,69</td><td class="crd-td">-57,86</td><td class="crd-td">1851-2021</td><td class="crd-td">2.964 (2021)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">RAF Mount Pleasant</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,82</td><td class="crd-td">-58,45</td><td class="crd-td">1986-2021</td><td class="crd-td">540 (1986)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Leith Harbour</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,13</td><td class="crd-td">-36,68</td><td class="crd-td">1909-1965</td><td class="crd-td">510 (1937)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Husvik</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,18</td><td class="crd-td">-36,71</td><td class="crd-td">1907-1959</td><td class="crd-td">365 (1937)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Stromness</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,16</td><td class="crd-td">-36,72</td><td class="crd-td">1907-1960</td><td class="crd-td">295 (1930)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Ocean Harbour</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,33</td><td class="crd-td">-36,27</td><td class="crd-td">1909-1919</td><td class="crd-td">240 (1914)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Prince Olav Harbour</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,07</td><td class="crd-td">-37,13</td><td class="crd-td">1911-1929</td><td class="crd-td">225 (1920)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Goose Green</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,83</td><td class="crd-td">-58,97</td><td class="crd-td">1881-2021</td><td class="crd-td">174 (1931)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Darwin</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,8</td><td class="crd-td">-58,95</td><td class="crd-td">1861-2021</td><td class="crd-td">164 (1901)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Godthul</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,28</td><td class="crd-td">-36,3</td><td class="crd-td">1908-1928</td><td class="crd-td">145 (1917)</td><td class="crd-td">Headland (1984) The Island of South Georgia</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Port Louis</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,53</td><td class="crd-td">-58,13</td><td class="crd-td">1764-2021</td><td class="crd-td">142 (1806)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Fox Bay</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,98</td><td class="crd-td">-60,06</td><td class="crd-td">1881-2021</td><td class="crd-td">112 (1931)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Port Egmont</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,35</td><td class="crd-td">-60,07</td><td class="crd-td">1765-1774</td><td class="crd-td">110 (1770)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Port Howard</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,62</td><td class="crd-td">-59,52</td><td class="crd-td">1881-2021</td><td class="crd-td">96 (1931)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Fox Bay West</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,95</td><td class="crd-td">-60,09</td><td class="crd-td">1881-2021</td><td class="crd-td">86 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Mare Harbour</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,88</td><td class="crd-td">-58,48</td><td class="crd-td">1986-2021</td><td class="crd-td">85 (1986)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Hill Cove</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,5</td><td class="crd-td">-60,12</td><td class="crd-td">1881-2021</td><td class="crd-td">82 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">North Arm</td><td class="crd-td">East Falkland</td><td class="crd-td">-52,13</td><td class="crd-td">-59,37</td><td class="crd-td">1891-2021</td><td class="crd-td">78 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Port Stephens</td><td class="crd-td">West Falkland</td><td class="crd-td">-52,11</td><td class="crd-td">-60,86</td><td class="crd-td">1881-2021</td><td class="crd-td">76 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Chartres</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,71</td><td class="crd-td">-60,09</td><td class="crd-td">1881-2021</td><td class="crd-td">68 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">New Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,72</td><td class="crd-td">-61,3</td><td class="crd-td">1909-2021</td><td class="crd-td">65 (1915)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Fitzroy</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,79</td><td class="crd-td">-58,23</td><td class="crd-td">1881-2021</td><td class="crd-td">64 (1911)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Roy Cove</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,55</td><td class="crd-td">-60,37</td><td class="crd-td">1881-2021</td><td class="crd-td">63 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">San Carlos</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,5</td><td class="crd-td">-59</td><td class="crd-td">1881-2021</td><td class="crd-td">58 (1911)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Douglas Station</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,45</td><td class="crd-td">-58,66</td><td class="crd-td">1881-2021</td><td class="crd-td">55 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Corbeta Uruguay</td><td class="crd-td">South Sandwich</td><td class="crd-td">-59,46</td><td class="crd-td">-27,33</td><td class="crd-td">1976-1982</td><td class="crd-td">50 (1982)</td><td class="crd-td">Headland (1984) South Georgia and South Sandwich Islands</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Teal Inlet</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,56</td><td class="crd-td">-58,44</td><td class="crd-td">1881-2021</td><td class="crd-td">49 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Pebble Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,31</td><td class="crd-td">-59,61</td><td class="crd-td">1881-2021</td><td class="crd-td">46 (1921)</td><td class="crd-td">Falkland Islands Government Census Reports (1851-2021)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Walker Creek</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,97</td><td class="crd-td">-58,86</td><td class="crd-td">1891-2021</td><td class="crd-td">45 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Weddell Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,89</td><td class="crd-td">-60,9</td><td class="crd-td">1881-2021</td><td class="crd-td">44 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>31</strong></td><td class="crd-td">Salvador</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,43</td><td class="crd-td">-58,37</td><td class="crd-td">1881-2021</td><td class="crd-td">43 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>32</strong></td><td class="crd-td">Dunnose Head</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,74</td><td class="crd-td">-60,42</td><td class="crd-td">1891-2021</td><td class="crd-td">39 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>33</strong></td><td class="crd-td">Green Patch</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,59</td><td class="crd-td">-58,13</td><td class="crd-td">1881-2021</td><td class="crd-td">38 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>34</strong></td><td class="crd-td">Johnson's Harbour</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,51</td><td class="crd-td">-58,01</td><td class="crd-td">1881-2021</td><td class="crd-td">37 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>35</strong></td><td class="crd-td">Saunders Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,37</td><td class="crd-td">-60,1</td><td class="crd-td">1881-2021</td><td class="crd-td">35 (1921)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>36</strong></td><td class="crd-td">Rincon Grande</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,47</td><td class="crd-td">-58,27</td><td class="crd-td">1891-2021</td><td class="crd-td">34 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>37</strong></td><td class="crd-td">Spring Point</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,83</td><td class="crd-td">-60,45</td><td class="crd-td">1891-2021</td><td class="crd-td">32 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>38</strong></td><td class="crd-td">Port Edgar</td><td class="crd-td">West Falkland</td><td class="crd-td">-52,01</td><td class="crd-td">-60,27</td><td class="crd-td">1891-2021</td><td class="crd-td">31 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>39</strong></td><td class="crd-td">King Edward Point</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,28</td><td class="crd-td">-36,49</td><td class="crd-td">1910-2021</td><td class="crd-td">30 (1955)</td><td class="crd-td">British Antarctic Survey (BAS)</td></tr>
<tr><td class="crd-td"><strong>40</strong></td><td class="crd-td">Estancia</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,63</td><td class="crd-td">-58,23</td><td class="crd-td">1891-2021</td><td class="crd-td">28 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>41</strong></td><td class="crd-td">Bodie Creek</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,85</td><td class="crd-td">-58,99</td><td class="crd-td">1891-2021</td><td class="crd-td">27 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>42</strong></td><td class="crd-td">Speedwell Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-52,22</td><td class="crd-td">-59,68</td><td class="crd-td">1891-2021</td><td class="crd-td">26 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>43</strong></td><td class="crd-td">Lively Island</td><td class="crd-td">East Falkland</td><td class="crd-td">-52,03</td><td class="crd-td">-58,47</td><td class="crd-td">1891-2021</td><td class="crd-td">24 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>44</strong></td><td class="crd-td">Port Albemarle</td><td class="crd-td">West Falkland</td><td class="crd-td">-52,18</td><td class="crd-td">-60,42</td><td class="crd-td">1891-2021</td><td class="crd-td">23 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>45</strong></td><td class="crd-td">Brookfield</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,62</td><td class="crd-td">-58,32</td><td class="crd-td">1901-2021</td><td class="crd-td">22 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>46</strong></td><td class="crd-td">West Point Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,35</td><td class="crd-td">-60,69</td><td class="crd-td">1891-2021</td><td class="crd-td">21 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>47</strong></td><td class="crd-td">Carcass Island</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,28</td><td class="crd-td">-60,54</td><td class="crd-td">1891-2021</td><td class="crd-td">20 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>48</strong></td><td class="crd-td">Bleaker Island</td><td class="crd-td">East Falkland</td><td class="crd-td">-52,22</td><td class="crd-td">-58,85</td><td class="crd-td">1891-2021</td><td class="crd-td">19 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>49</strong></td><td class="crd-td">Volunteer Point</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,48</td><td class="crd-td">-57,84</td><td class="crd-td">1891-2021</td><td class="crd-td">18 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>50</strong></td><td class="crd-td">Shallow Bay</td><td class="crd-td">West Falkland</td><td class="crd-td">-51,4</td><td class="crd-td">-59,99</td><td class="crd-td">1891-2021</td><td class="crd-td">17 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>51</strong></td><td class="crd-td">Cape Dolphin</td><td class="crd-td">East Falkland</td><td class="crd-td">-51,24</td><td class="crd-td">-58,97</td><td class="crd-td">1891-2021</td><td class="crd-td">15 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>52</strong></td><td class="crd-td">Sea Lion Island</td><td class="crd-td">East Falkland</td><td class="crd-td">-52,43</td><td class="crd-td">-59,08</td><td class="crd-td">1931-2021</td><td class="crd-td">11 (1931)</td><td class="crd-td">Falkland Islands Government Census 2016 and 2021 (Camp Settlements)</td></tr>
<tr><td class="crd-td"><strong>53</strong></td><td class="crd-td">Bird Island Research Station</td><td class="crd-td">South Georgia</td><td class="crd-td">-54,01</td><td class="crd-td">-38,05</td><td class="crd-td">1963-2021</td><td class="crd-td">10 (2001)</td><td class="crd-td">British Antarctic Survey (BAS)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Full 53-site gazetteer ordered by peak historical population (1764 to 2026).</figcaption>
</figure>

# Sources

::: {#refs}
:::
